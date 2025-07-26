import { createContext, type ReactNode, useContext, useMemo } from 'react'

import { useProfile, type User } from '@/entity/user'

const AuthContext = createContext<User | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: user } = useProfile()

  const authValue = useMemo(() => user?.userData ?? null, [user])

  console.log('authValue', authValue)
  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
