import { create } from "zustand";

interface ThemeState {
	isDarkMode: boolean;
	toggleTheme: () => void;
}

const useThemeStore = create<ThemeState>((set) => ({
	isDarkMode: matchMedia("(prefers-color-scheme: dark)").matches,
	toggleTheme: () => set((state) => ({ isDarkMode: !state.isDarkMode })),
}));

export default useThemeStore;
