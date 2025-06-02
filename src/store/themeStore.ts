import { create } from "zustand";
import { persist, createJSONStorage } from "zustand/middleware";

type ThemeStore = {
	isDarkMode: boolean;
	toggleTheme: () => void;
};

export const useThemeStore = create<ThemeStore>()(
	persist(
		(set, get) => ({
			isDarkMode: matchMedia("(prefers-color-scheme: dark)").matches,
			toggleTheme: () => set(() => ({ isDarkMode: !get().isDarkMode })),
		}),
		{
			name: "themeStore",
			storage: createJSONStorage(() => sessionStorage),
		}
	)
);
