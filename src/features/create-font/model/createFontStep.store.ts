import { create } from 'zustand'

type CreateFontStepStore = {
  currentStep: number
  actions: {
    setStep: (step: number) => void
    resetStep: () => void
  }
}

const INITIAL_STEP = 1

/**
 *
 * 폰트 생성 과정에서 현재 스텝을 전역으로 관리하는 스토어
 *
 * - currentStep: 현재 진행 중인 스텝 (1~3)
 * - setStep: 특정 스텝으로 이동
 * - resetStep: 1단계로 초기화
 */

export const useCreateFontStepStore = create<CreateFontStepStore>((set) => ({
  currentStep: INITIAL_STEP,
  actions: {
    setStep: (step: number) => set({ currentStep: step }),
    resetStep: () => set({ currentStep: INITIAL_STEP }),
  },
}))

export const useCreateFontStep = () => useCreateFontStepStore((state) => state.currentStep)
export const useCreateFontStepActions = () => useCreateFontStepStore((state) => state.actions)
