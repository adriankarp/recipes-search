import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import Grid from '@mui/material/Unstable_Grid2';
import CircularProgress from '@mui/material/CircularProgress';
import Typography from '@mui/material/Typography';
import { useGetRecipes } from '../../hooks/useRecipes';

const Home = () => {
  const [input, setInput] = React.useState('');
  const [query, setQuery] = React.useState('');
  const { error, loading, data } = useGetRecipes(query);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setInput(event.target.value);
    console.log(data.recipes);
  };

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setQuery(input);
  };

  if (query === '')
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
          <Typography variant="h4" sx={{ marginTop: 15 }}>
            Use the search bar to find results
          </Typography>
        </Grid>
      </>
    );

  if (error)
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
          <Typography variant="h4" sx={{ marginTop: 15 }}>
            Something went wrong...
          </Typography>
        </Grid>
      </>
    );

  if (loading)
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
          <CircularProgress sx={{ marginTop: 15 }} />
        </Grid>
      </>
    );

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
        {data.recipes.length !== 0 ? (
          data.recipes.map(
            (
              recipe: {
                label: string;
                image: string;
                ingredientLines: string[];
              },
              index: number
            ) => {
              return (
                <RecipeCard
                  key={index}
                  label={recipe.label}
                  image={recipe.image}
                  ingredients={recipe.ingredientLines}
                />
              );
            }
          )
        ) : (
          <Typography variant="h4" sx={{ marginTop: 15 }}>
            No recipes found
          </Typography>
        )}
      </Grid>
    </>
  );
};

export default Home;
