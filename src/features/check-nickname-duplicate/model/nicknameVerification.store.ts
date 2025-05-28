import { create } from 'zustand'

type Actions = {
  startChecking: () => void
  completeChecking: () => void
  setVerificationMessage: (message: string | null) => void
  updateVerificationStatus: (update: boolean) => void
  resetVerification: () => void
}

type NicknameVerificationStore = {
  isVerified: boolean
  isChecking: boolean
  verificationMessage: string | null
  actions: Actions
}

const initialValue = {
  isVerified: false,
  isChecking: false,
  verificationMessage: null,
}

/**
 * - isVerified: 검증 상태
 * - isChecking: 중복 검사 중 여부
 * - verificationMessage: UI에 표시할 메시지
 */

export const useNicknameVerificationStore = create<NicknameVerificationStore>((set) => ({
  ...initialValue,
  actions: {
    /** 중복 검사 시작 */
    startChecking: () => set({ isChecking: true }),

    /** 중복 검사 완료 */
    completeChecking: () => set({ isChecking: false }),

    /** 메시지 설정 */
    setVerificationMessage: (message) => set({ verificationMessage: message }),

    /** 검증 상태 업데이트 */
    updateVerificationStatus: (update) => set({ isVerified: update }),

    /** 전체 상태 초기화 */
    resetVerification: () => set(initialValue),
  },
}))

export const useVerificationCheckingState = () =>
  useNicknameVerificationStore((state) => state.isChecking)

export const useVerificationMessage = () =>
  useNicknameVerificationStore((state) => state.verificationMessage)

export const useVerificationStatus = () => useNicknameVerificationStore((state) => state.isVerified)

export const useVerificationActions = () => useNicknameVerificationStore((state) => state.actions)
