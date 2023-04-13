import { NavLink } from "react-router-dom";
import { useContext } from "react";

import { CartContext } from "..";

export function Header() {
  const { cart } = useContext(CartContext);

  const getStyle = function ({ isActive }) {
    return isActive ? "active-link" : "link";
  };

  return (
    <div>
      <h1>meKart</h1>
      <nav>
        <NavLink className={getStyle} to="/">
          {" "}
          Home{" "}
        </NavLink>{" "}
        ||
        <NavLink className={getStyle} to="/cart">
          {" "}
          Cart{" "}
        </NavLink>
        <h3> Items in cart: {cart.length} </h3>
      </nav>
    </div>
  );
}
