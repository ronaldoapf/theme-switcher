import axios from 'axios';
import { QueryClient } from '@tanstack/react-query';

export const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL,
  headers: {
    "Content-Type": "application/json"
  }
})

export const queryClient = new QueryClient();