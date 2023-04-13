import { useState } from "react";

import { CartContext } from "..";

export function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const cartContext = {
    cart: cart,
    addToCart: (item) => setCart([...cart, item])
  };

  return (
    <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );
}
