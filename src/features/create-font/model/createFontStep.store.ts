import { create } from 'zustand'

type CreateFontStepStore = {
  currentStep: number
  totalSteps: number
  actions: {
    setStep: (step: number) => void
    resetStep: () => void
  }
}

export const stepLabels = [
  '아래의 템플릿을 다운받아 작성해주세요.',
  '폰트 정보를 입력해주세요.',
  '전화번호를 입력해주세요. (선택)',
]

const initialValues = {
  currentStep: 1,
  totalSteps: 3,
  stepLabels,
}

export const useCreateFontStepStore = create<CreateFontStepStore>((set) => ({
  ...initialValues,
  actions: {
    setStep: (step: number) => set({ currentStep: step }),
    resetStep: () => set({ ...initialValues }),
  },
}))

export const useCreateFontStep = () => useCreateFontStepStore((state) => state.currentStep)
export const useCreateFontTotalSteps = () => useCreateFontStepStore((state) => state.totalSteps)
export const useCreateFontStepActions = () => useCreateFontStepStore((state) => state.actions)
