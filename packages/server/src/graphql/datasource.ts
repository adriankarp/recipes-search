import { RESTDataSource } from '@apollo/datasource-rest';
import config from '../config/index';

class RecipesAPI extends RESTDataSource {
  override baseURL = 'https://api.edamam.com/api/recipes/v2/';

  constructor() {
    super();
  }

  async getRecipes(query) {
    return this.get(
      `?q=${query}&app_id=${config.API_ID}&app_key=${config.API_KEY}&type=public`
    );
  }

  async getRecipe(query: string) {
    return this.get(`$q=${query}`);
  }
}

export default RecipesAPI;
