import { createContext, type ReactNode, useContext } from 'react'

import { useProfile, type User } from '@/entity/user'
import { Loading } from '@/shared/ui'

const AuthContext = createContext<User | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: userData, isPending, isError } = useProfile()

  if (isPending) {
    return <Loading />
  }

  if (isError) {
    return <AuthContext.Provider value={null}>{children}</AuthContext.Provider>
  }

  return <AuthContext.Provider value={userData.user}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
