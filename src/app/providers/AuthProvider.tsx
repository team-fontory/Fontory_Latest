import { createContext, useContext } from 'react'

import type { User } from '@/entity/user'
import { useMyProfile } from '@/features/auth'
import { Loading } from '@/shared/ui'

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

  let user = {
    nickname: '',
    gender: null,
    birth: '',
  } as User

  if (isLoading) return <Loading />
  if (data) user = { ...data }

  return (
    <AuthContext.Provider
      value={{
        user,
        isLoading,
        isError,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export const useAuth = () => useContext(AuthContext)
