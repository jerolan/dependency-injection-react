export default function getProducts(params) {
  const url = new URL("http://localhost:3000/api/products");

  for (let k in params) {
    url.searchParams.append(k, params[k]);
  }

  return fetch(url.toString()).then((res) => res.json());
}
