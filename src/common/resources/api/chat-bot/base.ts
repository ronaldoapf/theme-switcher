import { AxiosError } from "axios";
import { MutationFunction, UseMutateAsyncFunction, useMutation, useQuery } from "@tanstack/react-query";

type UseMutationBaseResponse<TData, TParams> = [UseMutateAsyncFunction<TData, AxiosError, TParams, unknown>, TData | undefined, boolean, AxiosError | null]

export function useMutationBase<TParams, TData = any>(fn: MutationFunction<TData, TParams>, key: string): UseMutationBaseResponse<TData, TParams> {
  const { mutateAsync, isLoading, data, error } = useMutation<TData, AxiosError, TParams>({
    mutationKey: [key],
    mutationFn: fn
  })

  return [mutateAsync, data, isLoading, error];
}