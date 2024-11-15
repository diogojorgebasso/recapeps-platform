import { Routes } from "./Routes";


import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "@/context/AuthContext";
import { CookieProvider } from "./context/CookieContext";

export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}>
        <CookieProvider>
          <Routes />
        </CookieProvider>
      </BrowserRouter>
    </AuthProvider>
  );
}