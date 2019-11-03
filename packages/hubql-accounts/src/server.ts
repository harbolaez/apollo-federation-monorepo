require("dotenv").config();

import { ApolloServer } from "apollo-server";
import { buildFederatedSchema } from "@apollo/federation";
import { baseUrl } from "hubql-common/dist/apollo-server";

import typeDefs from "./schema/schema";
import resolvers from "./schema/resolvers";

const apollo = new ApolloServer({
  debug: process.env.NODE_ENV !== "production",
  playground: true,
  introspection: true,
  tracing: true,
  schema: buildFederatedSchema([{ typeDefs, resolvers }]),
  dataSources: () => ({}),
  formatError: error => error,
  formatResponse: (res: { data: any }) => res,
  context: async () => {
    const baseURL = await baseUrl(process.env.NODE_ENV);
    return { baseURL };
  }
});

const PORT = process.env.NODE_PORT || 4001;
apollo.listen({ port: PORT }).then(async ({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
