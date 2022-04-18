import {
    ApolloClient,
    InMemoryCache,
    gql
  } from "@apollo/client";

  //Initial to all data
  const typeDefs = gql`
  extend type users {
    age:int
  }
`;

const resolvers = {
  users:{
    age(){
      return 25
    }
  }
}

export const client = new ApolloClient({
    uri: process.env.REACT_APP_GRAPHQL_URL,
    cache: new InMemoryCache(),
    resolvers,
    typeDefs
  });