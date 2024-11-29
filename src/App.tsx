import { Routes } from "./Routes";

import { ThemeProvider } from "@/components/theme-provider"
import { BrowserRouter } from "react-router";
import { AuthProvider } from "@/context/AuthContext";
import { CookieProvider } from "./context/CookieContext";

export default function App() {
  return (
    <AuthProvider>
      <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
        <BrowserRouter>
          <CookieProvider>
            <Routes />
          </CookieProvider>
        </BrowserRouter>
      </ThemeProvider>
    </AuthProvider>
  );
}