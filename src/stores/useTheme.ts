import create from "zustand";

type Mode = "light" | "dark";

type ThemeStore = {
  mode: Mode;
  setMode: (mode: Mode) => void;
};

export default create<ThemeStore>((set) => ({
  mode: "light",
  setMode: (mode) => set(() => ({ mode })),
}));
