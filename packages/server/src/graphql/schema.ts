const typeDefs = /* GraphQL */ `
  type Query {
    recipes(query: String!): [Recipe]
  }

  type Recipe {
    label: String
    image: String
    source: String
    instructionsURL: String
    nutritionalValuesURL: String
    dietLabels: [String]
    healthLabels: [String]
    cautions: [String]
    ingredientLines: [String]
    calories: String
    cuisineType: [String]
    mealType: [String]
    dishType: [String]
  }
`;

export default typeDefs;
