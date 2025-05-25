import { Link } from 'react-router-dom'

import { ROUTES } from '@/app/router'
import { useMyProfile } from '@/features/auth'
import { cn } from '@/shared/lib'

import { MypageDropdown } from './MypageDropdown'

type Props = {
  isTransparent?: boolean
}

const NAV_LINKS = [
  { label: '둘러보기', to: ROUTES.EXPLORE },
  { label: '폰트제작', to: ROUTES.CREATE_FONT_STEP_ONE },
]

const AuthItem = ({ isTransparent = false }: Props) => {
  const { data: profile, isError } = useMyProfile()

  if (!isError && profile)
    return (
      <li className="group relative">
        <Link
          to={ROUTES.ACCOUNT_INFO}
          className={isTransparent ? 'hover:text-white' : 'hover:text-primary'}
        >
          마이페이지
        </Link>

        <div className="invisible absolute top-full left-1/2 -translate-x-1/2 group-focus-within:visible group-hover:visible">
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
