import { z } from 'zod'

export const fontAttribute = {
  name: {
    section: 'name',
    label: '폰트 이름',
    placeholder: '폰트 이름을 입력해주세요.',
  },
  engName: {
    section: 'engName',
    label: '폰트 영어 이름',
    placeholder: '영어 이름을 입력해주세요.',
  },
  example: {
    section: 'example',
    label: '예시 문구',
    placeholder: '예시 문구를 입력해주세요.',
  },
  phoneNumber: {
    section: 'phoneNumber',
    label: '전화번호',
    maxLength: 11,
    placeholder: '전화번호를 입력해주세요.',
  },
  file: {
    section: 'file',
  },
} as const

export const fontSchema = z.object({
  name: z
    .string()
    .min(1, { message: '폰트 이름을 입력해주세요.' })
    .max(9, { message: '폰트 이름은 9글자까지 입력 가능합니다.' }),
  engName: z
    .string()
    .min(1, { message: '폰트 영어 이름을 입력해주세요.' })
    .max(9, { message: '폰트 영어 이름은 9글자까지 입력 가능합니다.' }),
  example: z
    .string()
    .min(1, { message: '예시 문구를 입력해주세요.' })
    .max(50, { message: '예시 문구는 50글자까지 입력 가능합니다.' }),
  phoneNumber: z.string(),
  file: z
    .custom<File | null>((val) => val === null || val instanceof File, '파일을 업로드해주세요.')
    .refine((file) => file !== null && file.size > 0, '파일을 업로드해주세요.'),
})

export const createFontStepOneSchema = fontSchema.pick({ file: true })
export const createFontStepTwoSchema = fontSchema.pick({ name: true, engName: true, example: true })
export const createFontStepThreeSchema = fontSchema.pick({ phoneNumber: true })
