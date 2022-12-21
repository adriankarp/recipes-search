const resolvers = {
  Query: {
    recipes: (_, { query }, { dataSources }) => {
      return dataSources.recipesAPI.getRecipes(query);
    }
  }
};

export default resolvers;
