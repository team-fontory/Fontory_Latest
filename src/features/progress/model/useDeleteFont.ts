import { useQueryParam } from '@/shared/hooks'

import { useDeleteFontMutation } from '../api/myFont.mutation'

export const useDeleteFont = () => {
  const { getQueryParam } = useQueryParam()
  const { mutate } = useDeleteFontMutation()

  const fontId = getQueryParam<number>('id')

  const handleDeleteFont = () => {
    mutate(fontId as number)
  }

  return { handleDeleteFont }
}
