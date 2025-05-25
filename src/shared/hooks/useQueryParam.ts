import { useLocation } from 'react-router-dom'

export const useQueryParam = () => {
  const location = useLocation()
  const params = new URLSearchParams(location.search)

  const getQueryParam = <T = string>(key: string): T | undefined => {
    const value = params.get(key)
    if (value === null) return undefined as T

    return value as unknown as T
  }

  return { getQueryParam }
}
