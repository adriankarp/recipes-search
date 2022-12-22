import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';

const RecipeCard = ({ label, image, ingredients }: Props) => {
  return (
    <Card sx={{ minWidth: 400, maxWidth: 400, marginTop: 1, marginBottom: 2 }}>
      <CardMedia sx={{ height: 140 }} image={image} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {label}
        </Typography>
        {ingredients.map((ingredient, index) => {
          return (
            <Typography
              key={index}
              gutterBottom
              variant="body2"
              color="text.secondary"
              component="div"
            >
              {ingredient}
            </Typography>
          );
        })}
      </CardContent>
      <CardActions>
        <Link
          component="button"
          variant="button"
          onClick={() => {
            console.info("I'm a button.");
          }}
          marginRight={2}
          underline="none"
        >
          Recipe instructions
        </Link>
        <Link
          component="button"
          variant="button"
          onClick={() => {
            console.info("I'm a button.");
          }}
          underline="none"
        >
          Nutritional values
        </Link>
      </CardActions>
    </Card>
  );
};

export default RecipeCard;

type Props = {
  label: string;
  image: string;
  ingredients: string[];
};
