import { useEffect, useState } from "react";
import useDebounce from "../hooks/use-debounce";

export default function SearchInput({ onSearch }) {
  const [value, setState] = useState("");
  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    onSearch(debouncedValue);
  }, [debouncedValue, onSearch]);

  return (
    <input
      type="text"
      name="search"
      placeholder="Buscar un producto"
      className="border bg-gray-100 rounded-md h-6 w-full px-3"
      value={value}
      onChange={(e) => setState(e.target.value)}
    />
  );
}
