import type {
  UseMutationOptions,
  UseQueryOptions,
  UseSuspenseQueryOptions,
} from '@tanstack/react-query'
import { useMutation, useQuery, useSuspenseQuery } from '@tanstack/react-query'
import type { AxiosError } from 'axios'

type DefaultQueryOptions<TData, TQueryFnData = TData, TError = AxiosError> = UseQueryOptions<
  TQueryFnData,
  TError,
  TData
>

type DefaultMutationOptions<TData, TVariables, TError = AxiosError> = UseMutationOptions<
  TData,
  TError,
  TVariables
>

type DefaultSuspenseQueryOptions<
  TData,
  TQueryFnData = TData,
  TError = AxiosError,
> = UseSuspenseQueryOptions<TQueryFnData, TError, TData>

/**
 * AxiosError를 에러 타입으로 고정한 useQuery 래퍼
 */
export const useAxiosQuery = <TData, TQueryFnData = TData>(
  queryKey: readonly unknown[],
  queryFn: () => Promise<TQueryFnData>,
  options?: Omit<DefaultQueryOptions<TData, TQueryFnData>, 'queryKey' | 'queryFn'>,
) => {
  return useQuery<TQueryFnData, AxiosError, TData>({
    queryKey,
    queryFn,
    ...options,
  })
}

/**
 * AxiosError를 에러 타입으로 고정한 useMutation 래퍼
 */
export const useAxiosMutation = <TData, TVariables>(
  mutationFn: (variables: TVariables) => Promise<TData>,
  options?: Omit<DefaultMutationOptions<TData, TVariables>, 'mutationFn'>,
) => {
  return useMutation<TData, AxiosError, TVariables>({
    mutationFn,
    ...options,
  })
}

/**
 * AxiosError를 에러 타입으로 고정한 useSuspenseQuery 래퍼
 */
export const useAxiosSuspenseQuery = <TData, TQueryFnData = TData>(
  queryKey: readonly unknown[],
  queryFn: () => Promise<TQueryFnData>,
  options?: Omit<DefaultSuspenseQueryOptions<TData, TQueryFnData>, 'queryKey' | 'queryFn'>,
) => {
  return useSuspenseQuery<TQueryFnData, AxiosError, TData>({
    queryKey,
    queryFn,
    ...options,
  })
}
