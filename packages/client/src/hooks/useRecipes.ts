import { gql, useQuery } from '@apollo/client';

const GET_RECIPES = gql`
  query Query($query: String!) {
    recipes(query: $query) {
      label
      image
      cuisineType
      mealType
      source
      instructionsURL
      nutritionalValuesURL
      ingredientLines
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
