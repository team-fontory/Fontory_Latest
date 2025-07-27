import { useMemo } from 'react'
import { useSearchParams } from 'react-router-dom'

export const useTypedSearchParam = <T extends string | number>(
  key: string,
  defaultValue?: T,
): [T, (value: T) => void] => {
  const [searchParams, setSearchParams] = useSearchParams()

  const typedValue = useMemo(() => {
    const raw = searchParams.get(key)

    if (raw === null) {
      return defaultValue as T
    }

    if (typeof defaultValue === 'number') {
      const parsed = Number(raw)
      return (isNaN(parsed) ? defaultValue : parsed) as T
    }

    return raw as T
  }, [searchParams, key, defaultValue])

  const setTypedValue = (value: T) => {
    const newParams = new URLSearchParams(searchParams)
    newParams.set(key, String(value))
    setSearchParams(newParams)
  }

  return [typedValue, setTypedValue]
}
