import { 
  useState, 
  useEffect, 
  useCallback, 
  createContext 
} from 'react'; 
import { ThemeProvider as StyledThemeProvider } from 'styled-components';
import { ThemeProviderProps, ThemeProviderType } from './types';

import dark from '@styles/themes/dark';
import light from '@styles/themes/light';

export const ThemeContext = createContext<ThemeProviderType>({} as ThemeProviderType);

export const ThemeProvider = ({ children }: ThemeProviderProps) => {

  const [mode, setMode] = useState(() => localStorage.getItem('theme') || 'light');

  useEffect(() => {
    localStorage.setItem('theme', mode);
  }, [mode])

  const toggleMode = useCallback(() => {
    setMode(prevState => prevState === 'light' ? 'dark' : 'light')
  }, []);
  
  return (
    <ThemeContext.Provider value={{mode, toggleMode}}>
      <StyledThemeProvider theme={mode === 'light' ? light : dark}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  )
}

export default ThemeProvider;