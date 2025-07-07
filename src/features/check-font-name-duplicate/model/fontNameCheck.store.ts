import { create } from 'zustand'

type FontNameCheckActions = {
  setFontNameCheckSuccess: (message: string) => void
  setFontNameCheckFail: () => void
  setFontNameChangedAfterCheck: () => void
  resetFontNameCheckState: () => void
}

type FontNameCheckStore = {
  isChecked: boolean
  message: string | null
  actions: FontNameCheckActions
}

const initialState = {
  isChecked: false,
  message: null,
}

export const useFontNameCheckStore = create<FontNameCheckStore>((set) => ({
  ...initialState,
  actions: {
    setFontNameCheckSuccess: (message) => set({ isChecked: true, message }),
    setFontNameCheckFail: () => set({ isChecked: false, message: '' }),
    setFontNameChangedAfterCheck: () => set({ isChecked: false, message: '' }),
    resetFontNameCheckState: () => set(initialState),
  },
}))

export const useFontNameChecked = () => useFontNameCheckStore((state) => state.isChecked)
export const useFontNameMessage = () => useFontNameCheckStore((state) => state.message)
export const useFontNameCheckActions = () => useFontNameCheckStore((state) => state.actions)
