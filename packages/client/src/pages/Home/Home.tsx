import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import Grid from '@mui/material/Unstable_Grid2';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { useGetRecipes } from '../../hooks/useRecipes';

const Home = () => {
  const [query, setQuery] = React.useState('');

  const { error, loading, data } = useGetRecipes('tomato garlic');

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
        {error ? (
          <Typography variant="h1" sx={{ marginTop: 25 }}>
            Something went wrong...
          </Typography>
        ) : loading ? (
          <CircularProgress sx={{ marginTop: 25 }} />
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
