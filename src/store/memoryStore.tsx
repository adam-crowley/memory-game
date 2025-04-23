import { create } from 'zustand'

interface Settings {
  theme: string
  noOfPlayers: number
  gridSize: number
}

interface BoardItem {
  number: number
  isSelected: boolean
  isComplete: boolean
}

interface MemoryStore {
  settings: Settings
  gameActive: boolean
  board: BoardItem[]
  setSettings: (setting: string, value: string | number) => void
  setGameActive: () => void
  setBoard: (pieces: number[]) => void
  // updateBoardItem: (index: number, updates)
}

export const useMemoryStore = create<MemoryStore>((set) => ({
  settings: { theme: 'numbers', noOfPlayers: 1, gridSize: 4 },
  gameActive: false,
  board: [],
  setSettings: (setting, value) =>
    set((state) => ({ settings: { ...state.settings, [setting]: value } })),
  setGameActive: () => set((state) => ({ gameActive: !state.gameActive })),
  setBoard: (pieces) =>
    set(() => ({
      board: pieces.map((piece) => ({
        number: piece,
        isSelected: false,
        isComplete: false,
      })),
    })),
  updateBoardItem: (index, updates) =>
    set((state) => ({
      board: state.board.map((item, i) =>
        i === index ? { ...item, ...updates } : item
      ),
    })),
}))
