import { Routes, Route, NavLink } from "react-router-dom";

import "./styles.css";
import { Cart } from "./pages/Cart";
import { products } from "./data/productsDB";
import { ProductList } from "./pages/ProductList";
import { Header } from "./components/Header";

export default function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/" element={<ProductList products={products} />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </div>
  );
}
