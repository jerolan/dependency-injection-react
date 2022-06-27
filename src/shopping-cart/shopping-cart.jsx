import { useState } from "react";
import NavBar from "../components/nav-bar";
import List from "./list";
import ListItem from "./list-item";
import { useProducts } from "./products-context";
import SearchInput from "./search-input";

export default function ShoppingCart() {
  const [search, setSeach] = useState("");
  const { products, loading } = useProducts(search);

  return (
    <>
      <NavBar />
      <div className="px-16 py-32">
        <div className="pb-8 flex items-center justify-between">
          <h4 className="text-2xl font-bold text-gray-900">My Products</h4>
          <div className="rounded-md w-1/3">
            <SearchInput onSearch={setSeach} />
          </div>
        </div>
        {loading ? (
          <p>Loading...</p>
        ) : (
          <List
            items={products}
            renderItem={(item) => (
              <ListItem
                key={item.id}
                id={item.id}
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
