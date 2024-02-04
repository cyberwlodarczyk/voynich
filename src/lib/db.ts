import { z } from "zod";

const NAME = "voynich";
const VERSION = 1;
const STORE = "passwords";
const KEY = 0;

const SCHEMA = z.object({
  salt: z.instanceof(Uint8Array),
  iv: z.instanceof(Uint8Array),
  data: z.instanceof(ArrayBuffer),
});

export function isIndexedDBSupported() {
  return !!window.indexedDB;
}

export function connect() {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const req = indexedDB.open(NAME, VERSION);
    req.addEventListener("success", () => resolve(req.result));
    req.addEventListener("error", () => reject(req.error));
    req.addEventListener("upgradeneeded", () =>
      req.result.createObjectStore(STORE)
    );
  });
}

export type IDBObject = z.infer<typeof SCHEMA>;

export function save(db: IDBDatabase, object: IDBObject) {
  return new Promise<void>((resolve, reject) => {
    const tx = db.transaction(STORE, "readwrite", { durability: "strict" });
    tx.addEventListener("error", () => reject(tx.error));
    const store = tx.objectStore(STORE);
    const req = store.put(object, KEY);
    req.addEventListener("success", () => resolve());
    req.addEventListener("error", () => reject(req.error));
  });
}

export function load(db: IDBDatabase) {
  return new Promise<IDBObject | null>((resolve, reject) => {
    const tx = db.transaction(STORE);
    tx.addEventListener("error", () => reject(tx.error));
    const store = tx.objectStore(STORE);
    const req = store.get(KEY);
    req.addEventListener("success", () => {
      try {
        resolve(req.result !== undefined ? SCHEMA.parse(req.result) : null);
      } catch (error) {
        reject(error);
      }
    });
    req.addEventListener("error", () => reject(req.error));
  });
}
