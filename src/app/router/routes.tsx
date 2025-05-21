import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

import { ROUTES } from './routes.constant'

const HomePage = lazy(() => import('@/pages/HomePage'))
const LoginPage = lazy(() => import('@/pages/LoginPage'))
const SignupStepOnePage = lazy(() => import('@/pages/SignupStepOnePage'))
const SignupStepTwoPage = lazy(() => import('@/pages/SignupStepTwoPage'))

export const routes: RouteObject[] = [
  { path: ROUTES.HOME, element: <HomePage /> },
  { path: ROUTES.LOGIN, element: <LoginPage /> },
  { path: ROUTES.SIGN_UP_STEP_ONE, element: <SignupStepOnePage /> },
  { path: ROUTES.SIGN_UP_STEP_TWO, element: <SignupStepTwoPage /> },
]
