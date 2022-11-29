import { ThemeProvider } from "./contexts/ThemeContext"
import AppRoutes from "./routes"
import GlobalStyle from "./styles"

function App() {
  return (
    <ThemeProvider>
      <GlobalStyle />
      <AppRoutes />
    </ThemeProvider>
  )
}

export default App
