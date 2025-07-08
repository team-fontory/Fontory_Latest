import { Link } from 'react-router-dom'

import { useAuth } from '@/app/providers'
import { ROUTES } from '@/app/router'
import { cn } from '@/shared/lib'

import { MypageDropdown } from './MypageDropdown'

type Props = {
  isTransparent?: boolean
}

const NAV_LINKS = [
  { label: '둘러보기', to: ROUTES.EXPLORE },
  { label: '폰트제작', to: ROUTES.CREATE_FONT },
]

export const AuthItem = ({ isTransparent = false }: Props) => {
  const { user, isError } = useAuth()

  if (!isError && user)
    return (
      <li className="group relative">
        <button
          type="button"
          className={cn(
            'cursor-pointer border-none bg-none',
            isTransparent ? 'hover:text-white' : 'hover:text-primary',
          )}
        >
          마이페이지
        </button>

        <div className="invisible absolute top-full left-1/2 z-10 -translate-x-1/2 opacity-0 transition-opacity duration-150 group-hover:visible group-hover:opacity-100">
          <MypageDropdown />
        </div>
      </li>
    )

  return (
    <li className={isTransparent ? 'hover:text-white' : 'hover:text-primary'}>
      <Link to={ROUTES.LOGIN}>로그인</Link>
    </li>
  )
}

export const NavigationBar = ({ isTransparent = false }: Props) => {
  return (
    <nav
      className={cn(
        'flex-between-center fixed z-10 w-screen px-[85px] py-[29px]',
        isTransparent ? 'bg-transparent' : 'bg-white/60 backdrop-blur-md',
      )}
    >
      <Link to={ROUTES.HOME}>
        <h1 className="font-logo">Fontory</h1>
      </Link>

      <ul className="font-navigation flex gap-9">
        {NAV_LINKS.map(({ label, to }) => (
          <li key={label} className={isTransparent ? 'hover:text-white' : 'hover:text-primary'}>
            <Link to={to}>{label}</Link>
          </li>
        ))}
        <AuthItem isTransparent={isTransparent} />
      </ul>
    </nav>
  )
}
