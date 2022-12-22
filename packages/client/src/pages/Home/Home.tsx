import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import RecipeCard from '../../components/RecipeCard/RecipeCard';
import Box from '@mui/material/Box';

const Home = () => {
  const [query, setQuery] = React.useState('');

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setQuery(event.target.value);
  };

  const onClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(query);
  };

  return (
    <div>
      <NavBar onChange={onChange} onClick={onClick} />
      <Box>
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
        <RecipeCard />
      </Box>
    </div>
  );
};

export default Home;
