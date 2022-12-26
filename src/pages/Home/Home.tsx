import { useEffect } from "react";
import { HomeContainer } from "./styles";
import { useAuth } from "@hooks/useAuth";
import { axiosClient } from "@common/resources/api";
import { useListChatbots } from "@common/resources/api/chat-bot";

export const Home = () => {
  const { signOut, roles } = useAuth();
  
  return (
    <p>Teste</p>
  )
};