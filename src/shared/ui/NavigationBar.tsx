import { Link } from 'react-router-dom'

import { ROUTES } from '@/app/router'

export const NavigationBar = () => {
  return (
    <nav className="flex-between-center fixed z-10 w-screen px-[85px] py-[29px]">
      <Link to={ROUTES.HOME}>
        <h1 className="font-logo">Fontory</h1>
      </Link>
      <ul className="font-navigation flex gap-9">
        <li>
          <Link to={ROUTES.EXPLORE}>둘러보기</Link>
        </li>
        <li>
          <Link to={ROUTES.CREATE_FONT}>폰트제작</Link>
        </li>
        <li>
          <Link to={ROUTES.LOGIN}>로그인</Link>
        </li>
      </ul>
    </nav>
  )
}
