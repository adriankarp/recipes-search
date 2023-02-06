import * as React from 'react';
import { styled } from '@mui/material/styles';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Collapse from '@mui/material/Collapse';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { blue } from '@mui/material/colors';

interface ExpandMoreProps extends IconButtonProps {
  expand: boolean;
}

const ExpandMore = styled((props: ExpandMoreProps) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme, expand }) => ({
  transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
  marginLeft: 'auto',
  transition: theme.transitions.create('transform', {
    duration: theme.transitions.duration.shortest
  })
}));

const RecipeCard = ({
  label,
  image,
  ingredients,
  cuisineType,
  mealType,
  source,
  instructionsURL,
  nutritionalValuesURL
}: Props) => {
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <Card sx={{ minWidth: 400, maxWidth: 400, marginTop: 1, marginBottom: 2 }}>
      <CardHeader title={label} sx={{ bgcolor: blue[800], color: '#ffffff' }} />
      <CardMedia sx={{ height: 140 }} image={image} />
      <CardContent>
        <Typography
          gutterBottom
          variant="body2"
          color="text.secondary"
          component="div"
        >
          {`Cuisine: ${cuisineType}`}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          color="text.secondary"
          component="div"
        >
          {`Type: ${mealType}`}
        </Typography>
        <Typography
          gutterBottom
          variant="body2"
          color="text.secondary"
          component="div"
        >
          {`Source: ${source}`}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <Link
          href={instructionsURL}
          underline="none"
          target="_blank"
          rel="noopener"
          variant="button"
          sx={{ marginRight: 4 }}
        >
          Instructions
        </Link>
        <Link
          href={nutritionalValuesURL}
          underline="none"
          target="_blank"
          rel="noopener"
          variant="button"
        >
          Nutrition
        </Link>
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          {ingredients.map((ingredient) => {
            return <Typography paragraph>{ingredient}</Typography>;
          })}
        </CardContent>
      </Collapse>
    </Card>
  );
};

export default RecipeCard;

type Props = {
  label: string;
  image: string;
  ingredients: string[];
  cuisineType: string;
  mealType: string;
  source: string;
  instructionsURL: string;
  nutritionalValuesURL: string;
};
