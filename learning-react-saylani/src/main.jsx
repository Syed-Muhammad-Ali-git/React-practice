import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import MyFirstPage from "./App";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyFirstPage />
  </StrictMode>
);
