import { create } from 'zustand'

import { type CreateFontFormType } from '@/entity/font'

type CreateFontStore = {
  form: CreateFontFormType
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
  form: initialValues,
  actions: {
    uploadFile: (file) => set((state) => ({ ...state, file })),
    setFontInformation: (information) =>
      set((state) => ({
        form: { ...information, phoneNumber: state.form.phoneNumber, file: state.form.file },
      })),
    setPhoneNumber: (phoneNumber) => set((state) => ({ ...state, phoneNumber })),
    reset: () => set({ form: initialValues }),
  },
}))

export const useCreateFontValues = () => useCreateFontStore((state) => state.form)
export const useCreateFontActions = () => useCreateFontStore((state) => state.actions)
