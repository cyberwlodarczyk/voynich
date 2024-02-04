const ITERATIONS = 10_000;
const SALT_SIZE = 32;
const IV_SIZE = 12;

export function isCryptoSupported() {
  return !!window.crypto && !!window.crypto.subtle;
}

export function getRandomValues(bytes: number) {
  return crypto.getRandomValues(new Uint8Array(bytes));
}

export function getRandomUUID() {
  return crypto.randomUUID();
}

export function generateSalt() {
  return getRandomValues(SALT_SIZE);
}

export function generateIV() {
  return getRandomValues(IV_SIZE);
}

export async function deriveKey(password: string, salt: Uint8Array) {
  const importedKey = await crypto.subtle.importKey(
    "raw",
    new TextEncoder().encode(password),
    { name: "PBKDF2" },
    false,
    ["deriveKey"]
  );
  const derivedKey = await crypto.subtle.deriveKey(
    {
      name: "PBKDF2",
      hash: "SHA-256",
      salt,
      iterations: ITERATIONS,
    },
    importedKey,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt", "decrypt"]
  );
  return derivedKey;
}

export async function encrypt(key: CryptoKey, iv: Uint8Array, data: string) {
  return await crypto.subtle.encrypt(
    { name: "AES-GCM", iv },
    key,
    new TextEncoder().encode(data)
  );
}

export async function decrypt(
  key: CryptoKey,
  iv: Uint8Array,
  data: ArrayBuffer
) {
  const result = await crypto.subtle.decrypt(
    { name: "AES-GCM", iv },
    key,
    data
  );
  return new TextDecoder().decode(result);
}
