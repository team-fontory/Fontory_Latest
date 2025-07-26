import { createContext, type ReactNode, useContext } from 'react'

import { useProfile, type User } from '@/entity/user'

const AuthContext = createContext<User | null>(null)

export const AuthProvider = ({ children }: { children: ReactNode }) => {
  const { data: user } = useProfile()

  return <AuthContext.Provider value={user?.userData ?? null}>{children}</AuthContext.Provider>
}

export const useAuth = () => useContext(AuthContext)
