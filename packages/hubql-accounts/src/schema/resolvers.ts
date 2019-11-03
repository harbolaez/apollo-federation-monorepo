import path from "path";
import { fileLoader, mergeResolvers } from "merge-graphql-schemas";

const resolver = fileLoader(path.join(__dirname, "../**/*.gql.ts"));
export default mergeResolvers(resolver);
