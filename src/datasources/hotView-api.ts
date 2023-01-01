import { RESTDataSource } from '@apollo/datasource-rest';

import { app } from '../config';

class HotViewAPI extends RESTDataSource {
  constructor() {
    super();
    this.baseURL = app.baseUrl;
  }
  getAllArticles() {
    return this.get('articles');
  }
  async getHomeArticles() {
    const response = await this.get('articles');
    return await response.data;
  }
  getSingleArticle(articleId: String) {
    return this.get(`/articles/${articleId}`);
  }
}

export default HotViewAPI;
