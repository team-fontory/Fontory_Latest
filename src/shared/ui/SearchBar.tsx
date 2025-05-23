import { Icon } from './Icon/Icon'

type Props = {
  onSearch: () => void
}

export const SearchBar = ({ onSearch }: Props) => {
  return (
    <form className="flex-align-center border-b-secondary gap-3.5 border-b-3 px-6 py-5">
      <input className="font-search grow border-none p-0" placeholder="폰트 이름을 입력해주세요." />
      <button type="submit" onClick={onSearch}>
        <Icon name="search" size={'2rem'} className="text-secondary" />
      </button>
    </form>
  )
}
