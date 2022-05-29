export default function getProducts() {
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
