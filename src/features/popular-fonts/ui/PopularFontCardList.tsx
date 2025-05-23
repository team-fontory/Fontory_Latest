import { PopularFontCard } from './PopularFontCard'

export const PopularFontCardList = () => {
  return (
    <div className="-ml-[10vw] flex w-[120vw] gap-10 overflow-x-auto">
      <PopularFontCard />
      <PopularFontCard />
      <PopularFontCard />
    </div>
  )
}
