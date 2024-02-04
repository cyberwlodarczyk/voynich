import { create } from "zustand";
import { Record } from "./record";

export interface Store {
  records: Record[] | null;
  init(records: Record[]): void;
  put(record: Record): void;
  remove(id: string): void;
  reset(): void;
}

export const useStore = create<Store>((set) => ({
  records: null,
  init(records) {
    return set({ records });
  },
  put(record) {
    return set((state) => ({
      records: [
        ...state.records!.filter((record) => record.id != record.id),
        record,
      ],
    }));
  },
  remove(id) {
    return set((state) => ({
      records: state.records!.filter((record) => record.id != id),
    }));
  },
  reset() {
    return set({ records: null });
  },
}));
