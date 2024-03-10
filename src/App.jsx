import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Cart from "./pages/Cart";
import Product from "./pages/Product";
import ProductDetail from "./components/ProductDetail";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/product" element={<Product />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
    </Routes>
  );
}

export default App;
