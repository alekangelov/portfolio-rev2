import create from "zustand";
import { persist } from "zustand/middleware";

type Theme = "light" | "dark";

export type ThemeStore = {
  theme: Theme;
  toggleTheme: () => void;
  setTheme: (theme: Theme) => void;
};
export const useTheme = create(
  persist<ThemeStore>(
    (set) => ({
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
    }),
    { name: "theme" }
  )
);
