import { gql } from "apollo-server";

export default gql`
  type User @key(fields: "id") {
    id: ID!
    name: String
    username: String
  }
`;
