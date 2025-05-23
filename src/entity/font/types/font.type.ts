import type z from 'zod'

import type {
  createFontStepOneSchema,
  createFontStepThreeSchema,
  createFontStepTwoSchema,
  fontSchema,
} from '../config/font.schema'

export type CreateFontFormType = z.input<typeof fontSchema>
export type CreateFontStepOneFormType = z.infer<typeof createFontStepOneSchema>
export type CreateFontStepTwoFormType = z.infer<typeof createFontStepTwoSchema>
export type CreateFontStepThreeFormType = z.infer<typeof createFontStepThreeSchema>
