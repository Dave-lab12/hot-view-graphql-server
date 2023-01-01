import type { Resolvers } from '../generated/resolvers-types';

const resolvers: Resolvers = {
  Query: {
    articlesForHome: (_, __, { dataSources }) => {
      return dataSources.hotView.getHomeArticles();
    },
  },
};
export default resolvers;
