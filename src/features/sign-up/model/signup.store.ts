import { create } from 'zustand'

import type { UserFieldsType } from '@/entity/user'

type Actions = {
  setSignupInfo: (data: Omit<SignupStore, 'agreedTerms' | 'actions'>) => void
  reset: () => void
}

type SignupStore = UserFieldsType & {
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
