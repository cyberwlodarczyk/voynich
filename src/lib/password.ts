import { getRandomValues } from "./crypto";

const VOWELS = "aeiouy";
const CONSONANTS = "bcdfghjklmnpqrstvwxz";
const SYMBOLS = "+-=~";
const SYLLABES = 3;
const BUFFER_SIZE = 0xff;

let buffer: Uint8Array | null = null;
let bufferIndex = 0;

function getRandomNumber(limit: number) {
  if (buffer === null || bufferIndex === BUFFER_SIZE) {
    buffer = getRandomValues(BUFFER_SIZE);
    bufferIndex = 0;
  }
  return buffer[bufferIndex++] % limit;
}

function getRandomChar(chars: string) {
  return chars[getRandomNumber(chars.length)];
}

function getRandomSyllabe(size: number) {
  let result = "";
  for (let i = 0; i < size; i++) {
    if (i === size - 1) {
      result += getRandomNumber(10);
    } else if (i % 2 === 1) {
      result += getRandomChar(VOWELS);
    } else {
      const char = getRandomChar(CONSONANTS);
      result += i === 0 ? char.toUpperCase() : char;
    }
  }
  return result;
}

export function generatePassword() {
  let result = "";
  for (let i = 0; i < SYLLABES; i++) {
    if (i !== 0) {
      result += getRandomChar(SYMBOLS);
    }
    result += getRandomSyllabe(getRandomNumber(2) === 0 ? 4 : 3);
  }
  return result;
}

export const MIN_PASSWORD_LENGTH = 12;
export const MAX_PASSWORD_LENGTH = 64;

export function isValidPassword(password: string) {
  const length = Array.from(password).length,
    upper = (password.match(/\p{Lu}/gu) ?? []).length,
    lower = (password.match(/\p{Ll}/gu) ?? []).length,
    digit = (password.match(/\p{Nd}/gu) ?? []).length,
    special = length - upper - lower - digit;
  return (
    length >= MIN_PASSWORD_LENGTH &&
    length <= MAX_PASSWORD_LENGTH &&
    upper >= 1 &&
    lower >= 1 &&
    digit >= 1 &&
    special >= 1
  );
}
