import create from "zustand";

type Theme = "light" | "dark";

export type ThemeStore = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};
export const useTheme = create<ThemeStore>((set) => ({
  theme: "dark",
  toggleTheme: () => {
    set((state) => {
      if (state.theme === "light") {
        return {
          theme: "dark",
        };
      }
      return {
        theme: "light",
      };
    });
  },
  setTheme: (theme: Theme) => {
    set({
      theme,
    });
  },
}));
