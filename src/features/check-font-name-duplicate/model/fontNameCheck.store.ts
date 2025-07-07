import { create } from 'zustand'

type FontNameCheckActions = {
  setCheckedFontName: (checked: boolean) => void
  setFontNameMessage: (message: string | null) => void
  setFontNameDuplicated: (duplicated: boolean) => void
  resetFontNameCheckState: () => void
}

type FontNameCheckStore = {
  isChecked: boolean
  isDuplicated: boolean
  message: string | null
  actions: FontNameCheckActions
}

const initialState = {
  isChecked: false,
  isDuplicated: false,
  message: null,
}

export const useFontNameCheckStore = create<FontNameCheckStore>((set) => ({
  ...initialState,
  actions: {
    setCheckedFontName: (checked) => set({ isChecked: checked }),
    setFontNameDuplicated: (duplicated) => set({ isDuplicated: duplicated }),
    setFontNameMessage: (message) => set({ message }),
    resetFontNameCheckState: () => set(initialState),
  },
}))

export const useFontNameChecked = () => useFontNameCheckStore((state) => state.isChecked)
export const useFontNameDuplicated = () => useFontNameCheckStore((state) => state.isDuplicated)
export const useFontNameMessage = () => useFontNameCheckStore((state) => state.message)
export const useFontNameCheckActions = () => useFontNameCheckStore((state) => state.actions)
