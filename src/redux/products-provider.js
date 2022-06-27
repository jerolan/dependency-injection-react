import { ProductsProvider } from "../shopping-cart/products-context";
import { useProductsReduxQuery } from "./products-api";

export default function ProductsReduxProvider({ children }) {
  return (
    <ProductsProvider value={{ useProducts: useProductsReduxQuery }}>
      {children}
    </ProductsProvider>
  );
}
