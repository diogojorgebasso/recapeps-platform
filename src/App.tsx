import { Routes } from "./Routes";

import { BrowserRouter } from "react-router";
import { AuthProvider } from "@/context/AuthContext";
import { CookieProvider } from "./context/CookieContext";
import { Provider } from "@/components/ui/provider"
import { SectionProvider } from "./context/SectionContext";

export default function App() {
  return (
    <Provider>
      <AuthProvider>
        <BrowserRouter>
          <CookieProvider>
            <SectionProvider>
              <Routes />
            </SectionProvider>
          </CookieProvider>
        </BrowserRouter>
      </AuthProvider>
    </Provider>

  );
}