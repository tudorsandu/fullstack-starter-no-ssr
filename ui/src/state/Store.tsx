import create from "zustand";

interface State {
  count: number;
  increaseCount: () => void;
  clearCount: () => void;
}

export const useStore = create<State>()((set) => ({
  count: 0,
  increaseCount: () => set((state) => ({ count: state.count + 1 })),
  clearCount: () => set({ count: 0 }),
}));
