import { z } from 'zod'

import { filterInput, formatPhoneNumberInput } from '@/shared/lib'

export const fontAttribute = {
  name: {
    section: 'name',
    label: '폰트 이름',
    placeholder: '폰트 이름을 입력해주세요.',
    hint: '최대 9글자까지 입력 가능',
    onInput: (e: React.FormEvent<HTMLInputElement>) => {
      const input = e.currentTarget
      input.value = filterInput(input.value, 9)
    },
  },
  engName: {
    section: 'engName',
    label: '폰트 영어 이름',
    placeholder: '영어 이름을 입력해주세요.',
    hint: '최대 12글자까지 입력 가능',
    onInput: (e: React.FormEvent<HTMLInputElement>) => {
      const input = e.currentTarget
      input.value = filterInput(input.value, 12, 'english')
    },
  },
  example: {
    section: 'example',
    label: '예시 문구',
    placeholder: '예시 문구를 입력해주세요.',
    hint: '최소 10글자, 최대 50글자까지 입력 가능',
    onInput: (e: React.FormEvent<HTMLTextAreaElement>) => {
      const input = e.currentTarget
      input.value = filterInput(input.value, 50)
    },
  },
  phoneNumber: {
    section: 'phoneNumber',
    label: '전화번호',
    placeholder: '전화번호를 입력해주세요.',
    hint: '"-"를 제외한 숫자만 입력 가능',
    onInput: (e: React.FormEvent<HTMLInputElement>) => {
      const input = e.currentTarget
      input.value = formatPhoneNumberInput(input.value)
    },
  },
  file: {
    section: 'file',
  },
} as const

export const fontSchema = z.object({
  name: z
    .string()
    .min(1, { message: '폰트 이름을 입력해주세요.' })
    .max(9, { message: '9글자까지 입력 가능합니다.' }),
  engName: z
    .string()
    .min(1, { message: '폰트 영어 이름을 입력해주세요.' })
    .max(12, { message: '12글자까지 입력 가능합니다.' }),
  example: z
    .string()
    .min(10, { message: '10글자 이상 작성해주세요.' })
    .max(50, { message: '50글자까지 입력 가능합니다.' }),
  phoneNumber: z.string(),
  file: z
    .custom<File | null>((val) => val === null || val instanceof File, '파일을 업로드해주세요.')
    .refine((file) => file !== null && file.size > 0, '파일을 업로드해주세요.'),
})

export const defaultValues = {
  name: '',
  engName: '',
  example: '',
  phoneNumber: '',
  file: null,
}

export const createFontSchema = fontSchema
export const createFontStepOneSchema = fontSchema.pick({ file: true })
export const createFontStepTwoSchema = fontSchema.pick({ name: true, engName: true, example: true })
export const createFontStepThreeSchema = fontSchema.pick({ phoneNumber: true })
