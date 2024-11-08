import { Routes } from "./Routes";


import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import { ApiProvider } from "./context/ApiContext";

export default function App() {
  return (
    <AuthProvider>
      <ApiProvider>
        <BrowserRouter>
          <Routes />
        </BrowserRouter>
      </ApiProvider>
    </AuthProvider>
  );
}