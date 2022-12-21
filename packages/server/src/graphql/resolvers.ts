const resolvers = {
  Query: {
    recipes: (_, args, contextValue) => {
      return contextValue.dataSources.recipesAPI.getRecipes(args.query);
    }
  }
};

export default resolvers;
