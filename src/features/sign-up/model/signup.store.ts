import { create } from 'zustand'

import type { SignupFieldsType } from '../types'

type Actions = {
  setSignupInfo: (data: Omit<SignupStore, 'agreedTerms' | 'actions'>) => void
  reset: () => void
}

type SignupStore = SignupFieldsType & {
  actions: Actions
}

const initialValues = {
  nickname: '',
  birth: '',
  gender: null,
}

export const useSignupStore = create<SignupStore>((set) => ({
  ...initialValues,
  actions: {
    setSignupInfo: (data) => set({ ...data }),
    reset: () => set({ ...initialValues }),
  },
}))

export const useSignupActions = () => useSignupStore((state) => state.actions)
