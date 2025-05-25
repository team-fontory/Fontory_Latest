import { cn } from '@/shared/lib'

import { usePopularFonts } from '../api/popularFonts.query'

import { PopularFontCard } from './PopularFontCard'

export const PopularFontCardList = () => {
  const { data: fontList } = usePopularFonts()

  const count = fontList.length
  const columnClass =
    {
      1: 'grid-cols-1',
      2: 'grid-cols-2',
      3: 'grid-cols-3',
    }[count] ?? 'grid-cols-3'

  return (
    <div className={cn('-ml-48 grid w-screen justify-center gap-12 p-12', columnClass)}>
      {fontList.map((font) => (
        <PopularFontCard key={font.fontId} {...font} />
      ))}
    </div>
  )
}
