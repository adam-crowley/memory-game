import { create } from 'zustand'

interface Settings {
  theme: string
  noOfPlayers: number
  gridSize: number
}

interface MemoryStore {
  settings: Settings
  setSettings: (setting: string, value: string | number) => void
}

export const useMemoryStore = create<MemoryStore>((set) => ({
  settings: { theme: 'numbers', noOfPlayers: 1, gridSize: 4 },
  setSettings: (setting, value) =>
    set((state) => ({ settings: { ...state.settings, [setting]: value } })),
}))
