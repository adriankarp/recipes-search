const resolvers = {
  Query: {
    recipes: async (_, args) => {
      console.log(_, args);
      return 'multiple';
    },

    recipe: async (_, args) => {
      console.log(_, args);
      return 'single';
    }
  }
};

export default resolvers;
