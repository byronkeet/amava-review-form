import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { Logo } from "./components/Logo";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Logo />
    <App />
  </StrictMode>
);
