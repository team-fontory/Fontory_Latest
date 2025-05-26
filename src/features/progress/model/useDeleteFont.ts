import type { MouseEvent } from 'react'

import { useDeleteFontMutation } from '../api/myFont.mutation'

export const useDeleteFont = (fontId: number) => {
  const { mutate } = useDeleteFontMutation()

  const handleDeleteFont = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    event.preventDefault()

    mutate(fontId)
  }

  return { handleDeleteFont }
}
