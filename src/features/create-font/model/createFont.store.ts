import { create } from 'zustand'

import { type CreateFontFormType } from '@/entity/font'

type CreateFontStore = CreateFontFormType & {
  actions: {
    uploadFile: (file: File | null) => void
    setFontInformation: (data: Pick<CreateFontFormType, 'name' | 'engName' | 'example'>) => void
    setPhoneNumber: (phone: string) => void
    reset: () => void
  }
}

const initialValues = {
  name: '',
  engName: '',
  example: '',
  phoneNumber: '',
  file: null,
}

export const useCreateFontStore = create<CreateFontStore>((set) => ({
  ...initialValues,
  actions: {
    uploadFile: (file) => set((state) => ({ ...state, file })),
    setFontInformation: ({ name, engName, example }) =>
      set((state) => ({ ...state, name, engName, example })),
    setPhoneNumber: (phoneNumber) => set((state) => ({ ...state, phoneNumber })),
    reset: () => set({ ...initialValues }),
  },
}))

export const useCreateFontValues = () =>
  useCreateFontStore(({ actions: _actions, ...rest }) => rest)
export const useCreateFontActions = () => useCreateFontStore((state) => state.actions)
