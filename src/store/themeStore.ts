import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

type ThemeStore = {
  isDarkMode: boolean
  toggleTheme: () => void
}

// Safe accessors for browser-only APIs to avoid SSR/runtime errors
const safeMatchMedia = (query: string) =>
  typeof window !== 'undefined' && typeof window.matchMedia === 'function'
    ? window.matchMedia(query)
    : ({ matches: false } as MediaQueryList)

// A no-op storage fallback for non-browser environments (SSR).
// It implements the minimal Storage interface used by zustand's persist so imports
// won't throw when `localStorage` is not available during server-side render.
const noopStorage: Storage = {
  getItem: (_: string) => null,
  setItem: (_: string, _value: string) => undefined,
  removeItem: (_: string) => undefined,
  clear: () => undefined,
  key: (_: number) => null,
  length: 0,
} as unknown as Storage

const getStorage = () =>
  typeof window !== 'undefined' ? localStorage : noopStorage

export const useThemeStore = create<ThemeStore>()(
  persist(
    (set, get) => ({
      // Use the user's saved preference if present; otherwise fall back to the
      // OS-level preference detected via matchMedia.
      isDarkMode: safeMatchMedia('(prefers-color-scheme: dark)').matches,
      toggleTheme: () => set(() => ({ isDarkMode: !get().isDarkMode })),
    }),
    {
      name: 'themeStore',
      // Persist to localStorage (survives browser restarts). Use a safe getter
      // so this file can be imported during SSR without throwing.
      storage: createJSONStorage(getStorage),
    }
  )
)
