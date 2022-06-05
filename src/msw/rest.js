import { rest } from "msw";
import { faker } from "@faker-js/faker";
import lodash from "lodash";

const handlers = [
  rest.get("http://localhost:3000/api/products", (req, res, ctx) => {
    const search = req.url.searchParams.get("search");

    const products = lodash.times(10, () => {
      return {
        id: faker.datatype.uuid(),
        name: `${
          search !== "" ? search : `Pizza`
        } ${faker.commerce.productName()}`,
        price: faker.commerce.price(),
        color: faker.color.human(),
        background: "from-cyan-500 to-blue-500",
      };
    });

    return res(ctx.status(200), ctx.json(products));
  }),
];

export default handlers;
