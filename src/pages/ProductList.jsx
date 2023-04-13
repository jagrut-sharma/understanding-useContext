import { useContext } from "react";

import { CartContext } from "..";

export function ProductList({ products }) {
  const cartCtx = useContext(CartContext);
  return (
    <div>
      {products.map((product) => {
        const { id, name, price } = product;
        return (
          <div
            key={id}
            style={{
              border: "1px solid gray",
              margin: "0.5rem",
              padding: "0.5rem"
            }}
          >
            <h2>
              {name} <small>INR {price}</small>
            </h2>
            <button onClick={() => cartCtx.addToCart(product)}>
              Add to Cart
            </button>
          </div>
        );
      })}
    </div>
  );
}
