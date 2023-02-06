import { gql, useQuery } from '@apollo/client';

const GET_RECIPES = gql`
  query Query($query: String!) {
    recipes(query: $query) {
      label
      image
      source
      instructionsURL
      nutritionalValuesURL
      dietLabels
      healthLabels
      cautions
      ingredientLines
      calories
      cuisineType
      mealType
      dishType
    }
  }
`;

export const useGetRecipes = (query: string) => {
  const { loading, error, data } = useQuery(GET_RECIPES, {
    skip: !query,
    variables: { query }
  });

  return {
    data,
    error,
    loading
  };
};
