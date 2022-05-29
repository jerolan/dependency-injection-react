import { useEffect, useState } from "react";
import NavBar from "../ui/nav-bar";
import List from "./list";
import ListItem from "./list-item";
import SearchInput from "./search-input";

function getProducts() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve([
        {
          id: "1",
          name: "Pizza",
          price: "10.00",
          color: "Red",
          background: "from-cyan-500 to-blue-500",
        },
      ]);
    }, 300);
  });
}

export default function ShoppingCart() {
  const [loading, setLoading] = useState(false);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setLoading(true);
    getProducts().then((products) => {
      setProducts(products);
      setLoading(false);
    });
  }, []);

  return (
    <>
      <NavBar />
      <div className="px-16 py-32">
        <div className="pb-8 flex items-center justify-between">
          <h4 className="text-2xl font-bold text-gray-900">My Products</h4>
          <div className="rounded-md w-1/3">
            <SearchInput onSearch={() => {}} />
          </div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <List
            items={products}
            fetchMore={() => {}}
            renderItem={(item) => (
              <ListItem
                key={item.id}
                background={item.background}
                name={item.name}
                color={item.color}
                price={item.price}
              />
            )}
          />
        )}
      </div>
    </>
  );
}
