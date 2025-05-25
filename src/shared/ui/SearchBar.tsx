import { type FormEvent, useState } from 'react'

import { Icon } from './Icon/Icon'

type Props = {
  onSearch: (keyword: string) => void
}

export const SearchBar = ({ onSearch }: Props) => {
  const [keyword, setKeyword] = useState<string>('')

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    onSearch(keyword.trim())
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="flex-align-center border-b-secondary gap-3.5 border-b-3 px-6 py-5"
    >
      <input
        value={keyword}
        onChange={(e) => setKeyword(e.target.value)}
        className="font-search grow border-none p-0"
        placeholder="폰트 이름을 입력해주세요."
      />
      <button type="submit">
        <Icon name="search" size={'2rem'} className="text-secondary" />
      </button>
    </form>
  )
}
