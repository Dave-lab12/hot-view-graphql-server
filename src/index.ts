import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { readFileSync } from 'fs';
import path from 'path';
import resolvers from './resolvers';
import HotViewAPI from './datasources/hotView-api';

const __dirname = path.resolve();
const typeDefs = readFileSync(path.join(__dirname, 'src', './schema.graphql'), {
  encoding: 'utf-8',
});

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

// Passing an ApolloServer instance to the `startStandaloneServer` function:
//  1. creates an Express app
//  2. installs your ApolloServer instance as middleware
//  3. prepares your app to handle incoming requests

const { url } = await startStandaloneServer(server, {
  context: async () => {
    return {
      dataSources: {
        hotView: new HotViewAPI(),
      },
    };
  },
  listen: { port: 4000 },
});
console.log(`🚀  Server ready at: ${url}`);
