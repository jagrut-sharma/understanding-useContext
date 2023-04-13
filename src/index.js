import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter as Router } from "react-router-dom";

import App from "./App";
import { CartContext } from "./context/CartContext";
import { CartProvider } from "./context/CartProvider";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

export { CartContext };

root.render(
  <StrictMode>
    <Router>
      <CartProvider>
        <App />
      </CartProvider>
    </Router>
  </StrictMode>
);
