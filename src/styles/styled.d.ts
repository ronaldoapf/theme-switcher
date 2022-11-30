import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    title: string;
    colors: {
      primary: string;
      secondary: string;
      background: string;
      backgroundNavbar: string;
      text: string;
      textPrimary: string;
    }
  }
}rgb(249, 250, 251)