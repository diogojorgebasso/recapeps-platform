import { Routes } from "./Routes";

import { BrowserRouter } from "react-router";
import { AuthProvider } from "@/context/AuthContext";
import { CookieProvider } from "./context/CookieContext";
import { Provider } from "@/components/ui/provider"

export default function App() {
  return (
    <Provider>
      <AuthProvider>
        <BrowserRouter>
          <CookieProvider>
            <Routes />
          </CookieProvider>
        </BrowserRouter>
      </AuthProvider>
    </Provider>

  );
}