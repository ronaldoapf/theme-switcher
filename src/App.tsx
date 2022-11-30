import AppRoutes from "./routes"
import GlobalStyle from "./styles"
import { ThemeProvider } from "./contexts/ThemeContext"
import { AuthProvider } from "./contexts/AuthContext";
import { QueryClientProvider } from "@tanstack/react-query";
import { queryClient } from "@common/resources/api";

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <ThemeProvider>
          <GlobalStyle />
          <AppRoutes />
        </ThemeProvider>
      </AuthProvider>
    </QueryClientProvider>

  )
}

export default App
