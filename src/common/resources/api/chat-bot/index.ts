import { axiosClient } from "..";
import { ListChatbotsParams, ProductSearchParams } from "./types/request";
import { ListChatbotsResponse } from "./types/response";
import { useMutationBase } from "./base";

const prefix = '/chat-bot';

async function listChatbots(body?: ListChatbotsParams) {
  const { data } = await axiosClient.post(`${prefix}/index`, body);
  return data;
}

async function productSearch(body?: ProductSearchParams) {
  const { data } = await axiosClient.post(`${prefix}/productsearch`, body);
  return data;
}

export function useListChatbots() {
  return useMutationBase<ListChatbotsParams, ListChatbotsResponse>(listChatbots, 'list-chatbots')
}

export function useProductSearch() {
  return useMutationBase<ProductSearchParams>(productSearch, 'product-search')
}