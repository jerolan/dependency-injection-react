import { useShoppingCartState } from "../providers/shopping-cart-context";

export default function NavBar() {
  const items = useShoppingCartState();

  return (
    <header className="flex items-center justify-between h-16 border px-16">
      <h1 className="font-bold">super awesome</h1>
      <div className="flex items-center space-x-3">
        <p className="text-center px-2 font-bold text-white rounded-full bg-sky-400">
          {`Items in cart ${items.length}`}
        </p>
        <figure>
          <div className="rounded-full bg-indigo-600 h-8 w-8" />
        </figure>
      </div>
    </header>
  );
}
