import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./shopping-cart";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<ShoppingCart />} />
      </Routes>
    </BrowserRouter>
  );
}
