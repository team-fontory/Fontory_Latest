import { create } from 'zustand'

type SignupStepStore = {
  currentStep: number
  totalSteps: number
  actions: {
    setStep: (step: number) => void
    resetStep: () => void
  }
}

export const stepLabels = ['이용약관에 동의해주세요.', '가입 정보를 입력해주세요.']

const initialValues = {
  currentStep: 1,
  totalSteps: 2,
}

export const useSignupStepStore = create<SignupStepStore>((set) => ({
  ...initialValues,
  actions: {
    setStep: (step: number) => set({ currentStep: step }),
    resetStep: () => set({ ...initialValues }),
  },
}))

export const useSignupStep = () => useSignupStepStore((state) => state.currentStep)
export const useSignupTotalSteps = () => useSignupStepStore((state) => state.totalSteps)
export const useSignupStepActions = () => useSignupStepStore((state) => state.actions)
