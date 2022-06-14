import { ApolloClient, InMemoryCache } from "@apollo/client";
const apollo = new ApolloClient({
    uri: "http://192.9.200.187:53202/graphql",
    cache: new InMemoryCache(),
});
export default apollo