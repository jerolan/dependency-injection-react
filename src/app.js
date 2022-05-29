import { BrowserRouter, Routes, Route } from "react-router-dom";
import ShoppingCart from "./shopping-cart";

export default function App() {
  return (
    <main className="tracking-tight">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ShoppingCart />} />
        </Routes>
      </BrowserRouter>
    </main>
  );
}
