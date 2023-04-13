import { useContext } from "react";

import { CartContext } from "..";

export function Cart() {
  const { cart } = useContext(CartContext);

  return (
    <div>
      <h3>{cart.length} items are present in your cart</h3>
      {cart.map((product) => (
        <div
          style={{
            border: "1px solid black",
            margin: "0.5rem",
            padding: "0.5rem"
          }}
          key={product.id}
        >
          {product.name}
        </div>
      ))}
      <div style={{ textAlign: "right", margin: "1rem" }}>
        Total: {cart.reduce((total, { price }) => total + price, 0)}
      </div>
    </div>
  );
}
