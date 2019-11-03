export default {
  Query: {
    version: () => {
      return "0.0";
    },
    me: () => {
      return {
        id: "1",
        name: "Ada Lovelace",
        birthDate: "1815-12-10",
        username: "@ada"
      };
    }
  },
  Mutation: {
    echo: (_: any, args: { message: string }) => {
      return args.message;
    }
  }
};
