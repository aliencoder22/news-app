import { ApolloClient, gql, InMemoryCache } from "@apollo/client";

const typeDefs = gql`
  extend type Character {
    favourite: Boolean!
  }
`;

const resolvers = {
  Character: {
    favourite() {
      return true;
    },
  },
};

const client = new ApolloClient({
  uri: "https://rickandmortyapi.com/graphql",
  cache: new InMemoryCache(),
  typeDefs,
  resolvers,
});

export default client;
