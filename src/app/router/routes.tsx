import { lazy, type ReactNode } from 'react'
import type { RouteObject } from 'react-router-dom'

import { ProtectedRoute } from './ProtectedRoute'
import { ROUTES } from './routes.constant'

const HomePage = lazy(() => import('@/pages/HomePage'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const SignupPage = lazy(() => import('@/pages/SignupPage'))
const ExplorePage = lazy(() => import('@/pages/ExplorePage'))
const BookmarkPage = lazy(() => import('@/pages/BookmarkPage'))
const MyFontPage = lazy(() => import('@/pages/MyFontPage'))
const AccountInfoPage = lazy(() => import('@/pages/AccountInfoPage'))
const AccountEditPage = lazy(() => import('@/pages/AccountEditPage'))
const FontDetailPage = lazy(() => import('@/pages/FontDetailPage'))
const CreateFont = lazy(() => import('@/pages/CreateFont'))

const withAuth = (element: ReactNode) => <ProtectedRoute>{element}</ProtectedRoute>

export const routes: RouteObject[] = [
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.LOGIN, element: <LoginPage /> },
  { path: ROUTES.SIGN_UP, element: <SignupPage /> },
  { path: ROUTES.EXPLORE, element: <ExplorePage /> },
  { path: ROUTES.DETAIL(), element: <FontDetailPage /> },

  // 로그인 후 이용 가능
  { path: ROUTES.BOOKMARK, element: withAuth(<BookmarkPage />) },
  { path: ROUTES.MY_FONT, element: withAuth(<MyFontPage />) },
  { path: ROUTES.ACCOUNT_INFO, element: withAuth(<AccountInfoPage />) },
  { path: ROUTES.ACCOUNT_EDIT, element: withAuth(<AccountEditPage />) },
  { path: ROUTES.CREATE_FONT, element: withAuth(<CreateFont />) },
]
