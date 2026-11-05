import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";

const root = document.getElementById("root");

if (!root) {
  throw new Error("The portfolio root element is missing.");
}

createRoot(root).render(
  <StrictMode>
    <App page={root.dataset.page} />
  </StrictMode>
);
