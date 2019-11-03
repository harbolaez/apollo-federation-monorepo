const { ApolloServer } = require("apollo-server");
const { ApolloGateway } = require("@apollo/gateway");

const gateway = new ApolloGateway({
  serviceList: [
    { name: "accounts", url: "http://localhost:4001/graphql" },
    { name: "documents", url: "http://localhost:4002/graphql" }
  ]
});

const server = new ApolloServer({
  gateway,
  subscriptions: false
});

server.listen().then(({ url }: any) => {
  console.log(`🚀 Server ready at ${url}`);
});

// Apollo Federation Notes"
//   - adding plugins to the ApolloServer
//   - Graph Manager look into it?
//   - RemoteGraphQLDataSource
//   - npx apollo service:check // validation
//   - query-planner change like the DB migrations
//   - does not expose implemwnting serviceList
//   - use a service
//   - add the schmea to S3? cloud??
//   -
