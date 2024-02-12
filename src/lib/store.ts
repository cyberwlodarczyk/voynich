import { DefaultParams, useParams } from "wouter";
import { create } from "zustand";
import { useMemo } from "react";
import {
  decrypt,
  deriveKey,
  encrypt,
  generateIV,
  generateSalt,
} from "./crypto";
import { IDBObject, connect, load, save } from "./db";
import { Record, parse, stringify } from "./record";

export interface StoreState {
  error: Error | null;
  db: IDBDatabase | null;
  object: IDBObject | null;
  key: CryptoKey | null;
  records: Record[] | null;
}

const DEFAULT_STATE: StoreState = {
  error: null,
  db: null,
  object: null,
  key: null,
  records: null,
};

export interface StoreActions {
  connect(): Promise<void>;
  init(password: string): Promise<void>;
  decrypt(password: string): Promise<boolean>;
  update(fn: (records: Record[]) => Record[]): Promise<void>;
  reset(): void;
}

export type Store = StoreState & StoreActions;

function createError(error: unknown) {
  return error instanceof Error
    ? error
    : new Error(`Something went wrong: ${error}`);
}

export const useStore = create<Store>((set, get) => ({
  ...DEFAULT_STATE,
  async connect() {
    try {
      const db = await connect();
      const object = await load(db);
      set({ db, object });
    } catch (error) {
      set({ error: createError(error) });
    }
  },
  async init(password) {
    try {
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
    } catch (error) {
      set({ error: createError(error) });
    }
  },
  async decrypt(password) {
    try {
      const { db, object } = get();
      if (!db || !object) {
        return false;
      }
      const { data, iv, salt } = object;
      const key = await deriveKey(password, salt);
      const decrypted = await decrypt(key, iv, data);
      if (!decrypted) {
        return false;
      }
      const records = parse(decrypted);
      set({ key, records });
      return true;
    } catch (error) {
      set({ error: createError(error) });
      return false;
    }
  },
  async update(fn) {
    try {
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
    } catch (error) {
      set({ error: createError(error) });
    }
  },
  reset() {
    const { db } = get();
    if (db) {
      db.close();
    }
    set(DEFAULT_STATE);
  },
}));

export interface RecordIDParams extends DefaultParams {
  id: string;
}

export function useRecord() {
  const { id } = useParams<RecordIDParams>();
  const records = useStore((state) => state.records);
  const record = useMemo(
    () => records?.find((record) => record.id === id),
    [id, records]
  );
  return record ?? null;
}
