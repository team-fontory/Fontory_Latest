import type { PropsWithChildren } from 'react'
import { Navigate } from 'react-router-dom'

import { useAuth } from '@/app/providers/AuthProvider'
import { ROUTES } from '@/app/router/routes.constant'
import { Loading } from '@/shared/ui'

export const ProtectedRoute = ({ children }: PropsWithChildren) => {
  const { user, isLoading } = useAuth()

  if (isLoading) return <Loading />
  if (!user) return <Navigate to={ROUTES.LOGIN} replace />

  return children
}
