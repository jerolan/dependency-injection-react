import { setupServer } from "msw/node";
import restHandlers from "./rest";
import graphqlHandlers from "./graphql";

export const server = setupServer(...restHandlers, ...graphqlHandlers);
