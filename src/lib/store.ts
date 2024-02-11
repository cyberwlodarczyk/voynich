import { create } from "zustand";
import {
  decrypt,
  deriveKey,
  encrypt,
  generateIV,
  generateSalt,
  isCryptoSupported,
} from "./crypto";
import { IDBObject, connect, isIndexedDBSupported, load, save } from "./db";
import { Record, parse, stringify } from "./record";

export interface StoreState {
  error: Error | null;
  db: IDBDatabase | null;
  object: IDBObject | null;
  key: CryptoKey | null;
  records: Record[] | null;
}

const DEFAULT_STATE: StoreState = {
  error: !isCryptoSupported()
    ? new TypeError("Crypto is not supported in this environment.")
    : !isIndexedDBSupported()
    ? new TypeError("IndexedDB is not supported in this environment.")
    : null,
  db: null,
  object: null,
  key: null,
  records: null,
};

export interface StoreActions {
  connect(): Promise<void>;
  init(password: string): Promise<void>;
  decrypt(password: string): Promise<void>;
  update(fn: (records: Record[]) => Record[]): Promise<void>;
  reset(): void;
}

export type Store = StoreState & StoreActions;

export const useStore = create<Store>((set, get) => ({
  ...DEFAULT_STATE,
  async connect() {
    const db = await connect();
    const object = await load(db);
    set({ db, object });
  },
  async init(password) {
    const { db } = get();
    if (!db) {
      return;
    }
    const salt = generateSalt();
    const key = await deriveKey(password, salt);
    const iv = generateIV();
    const data = await encrypt(key, iv, stringify([]));
    await save(db, { data, iv, salt });
    set({ object: { data, iv, salt }, key, records: [] });
  },
  async decrypt(password) {
    const { db, object } = get();
    if (!db || !object) {
      return;
    }
    const { data, iv, salt } = object;
    const key = await deriveKey(password, salt);
    const records = parse(await decrypt(key, iv, data));
    set({ key, records });
  },
  async update(fn) {
    const { db, object, key, records } = get();
    if (!db || !object || !key || !records) {
      return;
    }
    const { salt } = object;
    const newRecords = fn(records);
    const iv = generateIV();
    const data = await encrypt(key, iv, stringify(newRecords));
    const newObject = { data, iv, salt };
    await save(db, newObject);
    set({ object: newObject, records: newRecords });
  },
  reset() {
    const { db } = get();
    if (db) {
      db.close();
    }
    set(DEFAULT_STATE);
  },
}));
