import { useState } from "react";
import useIntersectionObserver from "../hooks/use-intersection-observer";

export default function List({
  fetchMore,
  items,
  loading,
  renderItem,
  renderLoadingItem,
}) {
  const [ref, setRef] = useState();

  useIntersectionObserver(ref, (entries) => {
    const [entry] = entries;
    if (entry.isIntersecting) {
      fetchMore();
    }
  });

  return (
    <>
      <div className="grid grid-cols-3 gap-y-10 gap-x-6">
        {items.map((item) => renderItem(item))}
        {loading ? renderLoadingItem() : null}
      </div>
      <div className="w-full" ref={setRef} />
    </>
  );
}
