import { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

export const useTheme = () => {
  const data = useContext(ThemeContext);

  if (!data) {
    throw new Error('useTheme must be used within ThemeProvider')
  }

  return data;
};