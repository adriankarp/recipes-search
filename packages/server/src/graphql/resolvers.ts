const resolvers = {
  Query: {
    recipes: (_, __, contextValue) => {
      return contextValue.dataSources.recipesAPI.getRecipes();
    },
    recipe: () => 'single recipe'
  }
};

export default resolvers;
