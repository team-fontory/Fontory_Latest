import { Link } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import { LogoutButton } from '@/features/auth'
import { cn } from '@/utils/cn'

const MYPAGE_LIST = [
  { label: '회원정보', to: ROUTES.ACCOUNT_INFO },
  { label: '제작한 폰트', to: ROUTES.MY_FONT },
  { label: '북마크', to: ROUTES.BOOKMARK },
  { label: '이용약관', to: ROUTES.NOT_FOUND },
]

type Props = {
  className?: string
}

export const MypageDropdown = ({ className }: Props) => {
  return (
    <ul
      className={cn(
        'flex-column border-grey rounded-small z-10 mt-4 min-w-[11.5rem] gap-3 border bg-white px-3 py-3 text-center shadow-md',
        className,
      )}
    >
      {MYPAGE_LIST.map(({ label, to }) => (
        <li key={label}>
          <Link to={to} className="font-dropdown rounded-small block w-full py-3 hover:bg-gray-100">
            {label}
          </Link>
        </li>
      ))}

      <LogoutButton />
    </ul>
  )
}
