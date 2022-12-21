import GraphQLJSON, { GraphQLJSONObject } from 'graphql-type-json';

const resolvers = {
  Query: {
    recipes: (_, args, contextValue) => {
      return contextValue.dataSources.recipesAPI.getRecipes(args.query);
    },
    recipe: () => 'single recipe'
  },
  JSON: GraphQLJSON,
  JSONObject: GraphQLJSONObject
};

export default resolvers;
