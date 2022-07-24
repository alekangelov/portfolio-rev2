import create from "zustand/react";

export const useLoading = create<{
  loading: boolean;
  setLoading: (loading: boolean) => void;
  percent: number;
  setPercent: (percent: number) => void;
}>((set) => ({
  loading: true,
  percent: 0,
  setLoading: (loading: boolean) => set(() => ({ loading })),
  setPercent: (percent: number) => {
    set(() => ({ percent, loading: percent < 100 }));
  },
}));
