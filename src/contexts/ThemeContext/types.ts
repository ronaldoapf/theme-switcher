export interface ThemeProviderProps {
  children: React.ReactNode;
}

export interface ThemeProviderType {
  mode: string;
  toggleMode: () => void;
}
