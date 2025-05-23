import { z } from 'zod'

import { formatDateInput } from '@/shared/lib'

export const userAttribute = {
  nickname: {
    section: 'nickname',
    label: '닉네임',
    placeholder: '닉네임을 입력해주세요.',
  },
  gender: {
    section: 'gender',
    label: '성별',
  },
  birth: {
    section: 'birth',
    label: '생년월일',
    type: 'text',
    inputMode: 'numeric',
    pattern: '\\d{4}-\\d{2}-\\d{2}',
    placeholder: '생년월일을 입력해주세요.',
    onInput: (e: React.FormEvent<HTMLInputElement>) => {
      const input = e.currentTarget
      input.value = formatDateInput(input.value)
    },
  },
  file: {
    section: 'file',
  },
} as const

export const userSchema = z.object({
  nickname: z
    .string()
    .min(1, { message: '닉네임을 입력해주세요.' })
    .max(8, { message: '닉네임은 8자 이내로 입력해주세요.' }),

  gender: z
    .enum(['MALE', 'FEMALE'])
    .nullable()
    .refine((val) => val !== null, { message: '성별을 선택해주세요.' }),

  birth: z.string().min(1, { message: '생년월일을 입력해주세요.' }),
})
