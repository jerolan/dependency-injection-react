import { setupWorker } from "msw";
import restHandlers from "./rest";
import graphqlHandlers from "./graphql";

export const worker = setupWorker(...restHandlers, ...graphqlHandlers);
