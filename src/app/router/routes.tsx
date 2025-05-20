import { lazy } from 'react'
import type { RouteObject } from 'react-router-dom'

import { ROUTES } from './routes.constant'

const HomePage = lazy(() => import('@/pages/HomePage'))

export const routes: RouteObject[] = [{ path: ROUTES.HOME, element: <HomePage /> }]
