import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';

import { typeDefs } from "./schema.js";
import { resolvers } from './resolvers.js';

const server = new ApolloServer({
  typeDefs,
  resolvers,
})

const { url } = await startStandaloneServer(server, {
  listen: { port: 8000 }
})

console.warn("Server active at port:", 8000);

/*
  1. Writing mutations
  2. Examples with variables
  3. Using Fragments
  4. Nested queries
  5. How to enforce type safety in frontend queries

*/