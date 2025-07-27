import { Icon } from '@/components/Icon/Icon'
import type { FontDetailType } from '@/entity/font'

import { useDeleteFont } from '../hook/useDeleteFont'

type Props = Pick<FontDetailType, 'fontId'>

export const DeleteFontButton = ({ fontId }: Props) => {
  const { handleDeleteFont } = useDeleteFont(fontId)

  return (
    <button
      type="button"
      onClick={handleDeleteFont}
      className="cursor-pointer transition-all hover:scale-105"
    >
      <div className="bg-primary font-secondary-button flex-align-center rounded-small gap-3 px-5 py-3 text-white">
        <span>삭제</span>
        <Icon name={'trash'} size={'2.1875rem'} className="text-white" />
      </div>
    </button>
  )
}
