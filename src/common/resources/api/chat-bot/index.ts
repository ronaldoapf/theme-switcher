import { axiosClient } from "..";
import { useMutation } from "@tanstack/react-query";
import { ListChatbotsParams } from "./types/request";

const prefix = '/chat-bot';

type UseMutationFn<TParams, TResponse> = (body?: TParams) => TResponse

export function useMutationBase<TParams, TResponse = any>(fn: UseMutationFn<TParams, TResponse>, key: string) {
  const { mutateAsync, isLoading, data, error } = useMutation({
    mutationFn: fn,
    mutationKey: [key],
  })

  return [mutateAsync, data, isLoading, error];
}

export function useListChatbots() {
  return useMutationBase(listChatbots, 'list-chatbots')
}

async function listChatbots(body?: ListChatbotsParams) {
  console.log(body)
  const { data } = await axiosClient.post(`${prefix}/index`, body);
  return data;
}
