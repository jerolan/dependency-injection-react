import { createContext, useContext } from "react";

const ProductsContext = createContext(undefined);

export function ProductsProvider({ value, children }) {
  return (
    <ProductsContext.Provider value={value}>
      {children}
    </ProductsContext.Provider>
  );
}

function useProductsProviderValue() {
  const context = useContext(ProductsContext);
  if (context === undefined) {
    throw new Error("useProducts must be used within a ProductsProvider");
  }
  return context;
}

export function useProducts(filterBy) {
  const context = useProductsProviderValue();
  return context.useProductsQuery();
}
