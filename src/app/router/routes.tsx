import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

import { ROUTES } from './routes.constant'

const HomePage = lazy(() => import('@/pages/HomePage'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const SignupStepOnePage = lazy(() => import('@/pages/SignupStepOnePage'))
const SignupStepTwoPage = lazy(() => import('@/pages/SignupStepTwoPage'))
const ExplorePage = lazy(() => import('@/pages/ExplorePage'))
const BookmarkPage = lazy(() => import('@/pages/BookmarkPage'))
const MyFontPage = lazy(() => import('@/pages/MyFontPage'))
const AccountInfoPage = lazy(() => import('@/pages/AccountInfoPage'))
const AccountEditPage = lazy(() => import('@/pages/AccountEditPage'))

export const routes: RouteObject[] = [
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.LOGIN, element: <LoginPage /> },
  { path: ROUTES.SIGN_UP_STEP_ONE, element: <SignupStepOnePage /> },
  { path: ROUTES.SIGN_UP_STEP_TWO, element: <SignupStepTwoPage /> },
  { path: ROUTES.EXPLORE, element: <ExplorePage /> },
  { path: ROUTES.BOOKMARK, element: <BookmarkPage /> },
  { path: ROUTES.MY_FONT, element: <MyFontPage /> },
  { path: ROUTES.ACCOUNT_INFO, element: <AccountInfoPage /> },
  { path: ROUTES.ACCOUNT_EDIT, element: <AccountEditPage /> },
]
