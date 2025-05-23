import type z from 'zod'

import type { createFontStepOneSchema, fontSchema } from '../config/font.schema'

export type CreateFontFormType = z.input<typeof fontSchema>
export type CreateFontStepOneFormType = z.infer<typeof createFontStepOneSchema>
