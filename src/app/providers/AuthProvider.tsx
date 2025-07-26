import { createContext, type ReactNode, useContext, useMemo } from 'react'

import { useProfile, type User } from '@/entity/user'

const AuthContext = createContext<User | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: userData } = useProfile()

  const authValue = useMemo(() => userData.user ?? null, [userData])

  return <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
