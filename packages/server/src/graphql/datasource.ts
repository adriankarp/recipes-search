import { RESTDataSource } from 'apollo-datasource-rest';

class RecipesAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = 'https://api.edamam.com/api/recipes/v2';
  }
}

export default RecipesAPI;
