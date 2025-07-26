import type { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '@/app/providers/AuthProvider'
import { ROUTES } from '@/app/router/routes.constant'

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const user = useAuth()

  if (!user) return <Navigate to={ROUTES.LOGIN} replace />

  return children
}
