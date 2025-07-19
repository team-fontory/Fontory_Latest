import type { MouseEvent } from 'react'

import { useDeleteFontMutation } from '../api/deleteFont.mutation'

export const useDeleteFont = (fontId: number) => {
  const { mutate: deleteFont } = useDeleteFontMutation()

  const handleDeleteFont = (event: MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation()
    event.preventDefault()
    deleteFont(fontId)
  }

  return { handleDeleteFont }
}
