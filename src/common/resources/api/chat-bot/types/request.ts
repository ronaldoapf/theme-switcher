export interface ListChatbotsParams {
  name?: string;
  status?: boolean;
  enable?: boolean;
  chatbotCode?: string;
}

export interface ProductSearchParams {
  search: string;
  chatId: string;
  productsQuantity?: number;
}