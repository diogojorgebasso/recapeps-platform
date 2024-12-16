import { Routes } from "./Routes";

import { BrowserRouter } from "react-router";
import { AuthProvider } from "@/context/AuthContext";
import { CookieProvider } from "./context/CookieContext";
import { Provider } from "@/components/ui/provider"

export default function App() {
  return (
    <AuthProvider>
      <Provider>
        <BrowserRouter>
          <CookieProvider>
            <Routes />
          </CookieProvider>
        </BrowserRouter>
      </Provider>
    </AuthProvider>
  );
}