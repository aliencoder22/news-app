import client from "./client";
import { ApolloProvider } from "@apollo/client";
import Characters from "./Characters";

const Main = () => {
  return (
    <ApolloProvider client={client}>
      <Characters />
    </ApolloProvider>
  );
};

export default Main;
