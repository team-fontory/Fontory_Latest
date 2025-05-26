import type { MouseEvent } from 'react'

import { useQueryParam } from '@/shared/hooks'

import { useDeleteFontMutation } from '../api/myFont.mutation'

export const useDeleteFont = () => {
  const { getQueryParam } = useQueryParam()
  const { mutate } = useDeleteFontMutation()

  const fontId = getQueryParam<number>('id')

  const handleDeleteFont = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    event.preventDefault()

    mutate(fontId as number)
  }

  return { handleDeleteFont }
}
