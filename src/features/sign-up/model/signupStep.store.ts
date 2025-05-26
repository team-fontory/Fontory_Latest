import { create } from 'zustand'

type SignupStepStore = {
  isStep1Completed: boolean
  actions: {
    completeStep1: () => void
    cancelStep1: () => void
    resetStep: () => void
  }
}

const initialValues = {
  isStep1Completed: false,
}

/**
 * 회원가입 과정에서 각 스텝의 완료 여부를 전역으로 관리하는 스토어
 *
 * - 사용자가 `step1`, `step2` 순차적으로 이동했는지 확인
 * - 중간 URL 접근을 막고 이전 스텝이 완료되지 않은 경우 리디렉션 처리 가능
 * - 사용자가 뒤로 가거나 폼을 취소했을 때 진행 상태를 초기화 가능
 * ---
 * - isStep1Completed: Step1 완료 여부
 * ---
 * - completeStep1: 해당 스텝 완료 처리
 * - cancelStep1: 해당 스텝 완료 취소
 * - resetStep: 모든 스텝 진행 상태 초기화
 */

export const useSignupStepStore = create<SignupStepStore>((set) => ({
  ...initialValues,
  actions: {
    completeStep1: () => set({ isStep1Completed: true }),
    cancelStep1: () => set({ isStep1Completed: false }),
    resetStep: () => set({ ...initialValues }),
  },
}))

export const useSignupStep1Done = () => useSignupStepStore((state) => state.isStep1Completed)
export const useSignupStepActions = () => useSignupStepStore((state) => state.actions)
