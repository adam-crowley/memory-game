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
  pair: number[]
  setSettings: (setting: string, value: string | number) => void
  setGameActive: () => void
  setBoard: (pieces: number[]) => void
  setPair: (index: number) => void
  updateBoardItem: (index: number, updates: Partial<BoardItem>) => void
}

export const useMemoryStore = create<MemoryStore>((set, get) => ({
  settings: { theme: 'numbers', noOfPlayers: 1, gridSize: 4 },
  gameActive: false,
  board: [],
  pair: [],
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
  setPair: (index) => {
    const { pair, board } = get()

    // Don't add to pair if already have 2 cards selected
    if (pair.length === 2) return

    // Don't add if card is already completed or selected
    if (
      board[index].isComplete ||
      (board[index].isSelected && !pair.includes(index))
    )
      return

    // Add to pair if not already in pair
    if (!pair.includes(index)) {
      const newPair = [...pair, index]
      set({ pair: newPair })

      // Process pair if we have 2 cards
      if (newPair.length === 2) {
        // Check if they match
        if (board[newPair[0]].number === board[newPair[1]].number) {
          // Mark both as complete
          get().updateBoardItem(newPair[0], { isComplete: true })
          get().updateBoardItem(newPair[1], { isComplete: true })
        } else {
          // If they don't match, flip them back after a delay
          setTimeout(() => {
            get().updateBoardItem(newPair[0], { isSelected: false })
            get().updateBoardItem(newPair[1], { isSelected: false })
          }, 1000)
        }

        // Reset pair after a delay
        setTimeout(() => {
          set({ pair: [] })
        }, 1100)
      }
    }
  },
  updateBoardItem: (index, updates) =>
    set((state) => ({
      board: state.board.map((item, i) =>
        i === index ? { ...item, ...updates } : item
      ),
    })),
}))
