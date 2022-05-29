export default function List({
  items,
  loading,
  renderItem,
  renderLoadingItem,
}) {
  return (
    <div className="grid grid-cols-3 gap-y-10 gap-x-6">
      {items.map((item) => renderItem(item))}
      {loading ? renderLoadingItem() : null}
    </div>
  );
}
