interface Chatbot {
  name: string;
  type: string;
  status: boolean;
  chatbotCode: string;
  menus: string[];
}

export type ListChatbotsResponse = Chatbot[];