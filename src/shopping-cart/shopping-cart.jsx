import NavBar from "../ui/nav-bar";
import SearchInput from "./search-input";
import List from "./list";
import ListItem from "./list-item";

export default function ShoppingCart() {
  const products = [
    {
      id: crypto.randomUUID(),
      name: "Pizza",
      price: "10.00",
      color: "Red",
      background: "from-cyan-500 to-blue-500",
    },
  ];

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
      </div>
    </>
  );
}
