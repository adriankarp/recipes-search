const typeDefs = /* GraphQL */ `
  scalar JSON
  scalar JSONObject

  type JSONType {
    JSONValue: JSON
    JSONObject: JSONObject
  }

  type Query {
    recipes(query: String): JSONObject
    recipe: String
  }

  type Recipe {
    uri: String
    url: String!
    label: String!
    image: String!
    source: String!
    dietLabels: [String]!
    healthLabels: [String]!
    cautions: [String]!
    ingredients: [Ingredient]!
    calories: Int
    glycemicIndex: Int
    totalWeight: Int
    cuisineType: [String]!
    mealType: [String]!
    dishType: [String]!
    instructions: [String!]!
    tags: [String]!
  }

  type Ingredient {
    text: String!
    quantity: Int!
    measure: String!
    food: String
    weight: String
    foodId: String
  }
`;

export default typeDefs;
