import { RESTDataSource } from '@apollo/datasource-rest';

class RecipesAPI extends RESTDataSource {
  override baseURL = 'https://api.edamam.com/api/recipes/v2';

  constructor() {
    super();
  }

  async getRecipes() {
    return this.get(`$q=`);
  }

  async getRecipe(query: string) {
    return this.get(`$q=${query}`);
  }
}

export default RecipesAPI;
