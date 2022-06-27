import { graphql } from "msw";
import { faker } from "@faker-js/faker";
import lodash from "lodash";

const handlers = [
  graphql.query("GetAllProducts", (req, res, ctx) => {
    const search = req.variables.search;

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

    return res(ctx.data({ products }));
  }),
];

export default handlers;
