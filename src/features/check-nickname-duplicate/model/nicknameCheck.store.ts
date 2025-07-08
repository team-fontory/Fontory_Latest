import { create } from 'zustand'

type Actions = {
  setNickNameCheckSuccess: (message: string) => void
  setNickNameCheckFail: () => void
  setNickNameChangedAfterCheck: () => void
  resetNickNameCheckState: () => void
}

type NicknameCheckStore = {
  isChecked: boolean
  message: string | null
  actions: Actions
}

const initialValue = {
  isChecked: false,
  message: null,
}

/**
 * - isVerified: 검증 상태
 * - isChecking: 중복 검사 중 여부
 * - verificationMessage: UI에 표시할 메시지
 */

export const useNickNameCheckStore = create<NicknameCheckStore>((set) => ({
  ...initialValue,
  actions: {
    setNickNameCheckSuccess: (message) => set({ isChecked: true, message }),
    setNickNameCheckFail: () => set({ isChecked: false, message: '' }),
    setNickNameChangedAfterCheck: () => set({ isChecked: false, message: '' }),
    resetNickNameCheckState: () => set(initialValue),
  },
}))

export const useNickNameChecked = () => useNickNameCheckStore((state) => state.isChecked)
export const useNickNameMessage = () => useNickNameCheckStore((state) => state.message)
export const useNickNameCheckActions = () => useNickNameCheckStore((state) => state.actions)
