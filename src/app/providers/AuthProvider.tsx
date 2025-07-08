import { createContext, useContext } from 'react'

import type { User } from '@/entity/user'
import { useMyProfile } from '@/features/auth'

type AuthContextValue = {
  user: User | null
  isLoading: boolean
  isError: boolean
}

const AuthContext = createContext<AuthContextValue>({
  user: null,
  isLoading: true,
  isError: false,
})

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const { data, isLoading, isError } = useMyProfile()

  return (
    <AuthContext.Provider
      value={{
        user: data ?? null,
        isLoading,
        isError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
