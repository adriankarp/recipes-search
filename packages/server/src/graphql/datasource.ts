import { RESTDataSource } from '@apollo/datasource-rest';
import config from '../config/index';

class RecipesAPI extends RESTDataSource {
  override baseURL = 'https://api.edamam.com/api/recipes/v2/';

  constructor() {
    super();
  }

  async getRecipes(query) {
    const response = await this.get(
      `?q=${query}&app_id=${config.API_ID}&app_key=${config.API_KEY}&type=public&random=true`
    );
    return this.recipesReducer(response.hits);
  }

  recipesReducer(hits) {
    return hits.map((hit) => {
      return {
        label: hit.recipe.label,
        image: hit.recipe.image,
        source: hit.recipe.source,
        instructionsURL: hit.recipe.url,
        nutritionalValuesURL: hit.recipe.shareAs,
        dietLabels: hit.recipe.dietLabels,
        healthLabels: hit.recipe.healthLabels,
        cautions: hit.recipe.cautions,
        ingredientLines: hit.recipe.ingredientLines,
        calories: hit.recipe.calories,
        cuisineType: hit.recipe.cuisineType,
        mealType: hit.recipe.mealType,
        dishType: hit.recipe.dishType
      };
    });
  }
}

export default RecipesAPI;
