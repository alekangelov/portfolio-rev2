import create from "zustand";

type Theme = "system" | "light" | "dark";
export type ThemeStore = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
  getSystemTheme: () => "light" | "dark";
};
export const useTheme = create<ThemeStore>((set) => ({
  theme: "system",
  getSystemTheme: () => {
    if (window.matchMedia) {
      const mq = window.matchMedia("(prefers-color-scheme: dark)");
      if (mq.matches) {
        return "dark";
      }
    }
    return "light";
  },
  toggleTheme: () => {
    set((state) => {
      if (state.theme === "system") {
        return {
          theme: state.getSystemTheme(),
        };
      }
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
