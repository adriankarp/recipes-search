import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import Grid from '@mui/material/Unstable_Grid2';
import { useGetRecipes } from '../../hooks/useRecipes';

const Home = () => {
  const [query, setQuery] = React.useState('');

  const { error, loading, data } = useGetRecipes('tomato garlic bread peas');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(query);
  };

  return (
    <>
      <NavBar onChange={onChange} onClick={onClick} />
      <Grid
        container
        spacing={1}
        justifyContent="space-around"
        alignContent="center"
        mt={3}
      >
        {loading ? (
          <h5>Loading...</h5>
        ) : (
          data.recipes.map(
            (recipe: {
              label: string;
              image: string;
              ingredientLines: string[];
            }) => {
              return (
                <RecipeCard
                  label={recipe.label}
                  image={recipe.image}
                  ingredients={recipe.ingredientLines}
                />
              );
            }
          )
        )}
      </Grid>
    </>
  );
};

export default Home;
