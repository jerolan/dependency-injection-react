export default function ListItem({ background, name, color, price }) {
  return (
    <article className="group relative">
      <div className="w-full min-h-80 bg-gray-200 aspect-w-1 aspect-h-1 rounded-md overflow-hidden group-hover:opacity-75 h-80">
        <div className={`w-full h-full bg-gradient-to-r ${background}`} />
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{name}</h3>
          <p className="mt-1 text-sm text-gray-500">{color}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">${price}</p>
      </div>
    </article>
  );
}
