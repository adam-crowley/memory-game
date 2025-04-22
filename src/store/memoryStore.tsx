import { create } from 'zustand'

interface Settings {
  theme: string
  noOfPlayers: number
  gridSize: number
}

interface MemoryStore {
  settings: Settings
  gameActive: boolean
  board: number[]
  setSettings: (setting: string, value: string | number) => void
  setGameActive: () => void
  setBoard: (pieces: number[]) => void
}

export const useMemoryStore = create<MemoryStore>((set) => ({
  settings: { theme: 'numbers', noOfPlayers: 1, gridSize: 4 },
  gameActive: false,
  board: [],
  setSettings: (setting, value) =>
    set((state) => ({ settings: { ...state.settings, [setting]: value } })),
  setGameActive: () => set((state) => ({ gameActive: !state.gameActive })),
  setBoard: (pieces) => set(() => ({ board: pieces })),
}))
