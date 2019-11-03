import path from "path";
import { gql } from "apollo-server";
import { fileLoader, mergeTypes } from "merge-graphql-schemas";

const typeDefs = fileLoader(path.join(__dirname, "../**/typesDefs/*.gql.ts"));
export default gql`
  ${mergeTypes(typeDefs, { all: true })}
`;
