import { fetchData } from './api';

export default class Model {
  constructor() {
    this.fetchData = fetchData;
  }

  getArticle(params, callback) {
    this.fetchData(`/posts/${params.title}`)
      .then(callback);
  }

  getArticleList(category, callback) {
    this.fetchData(`/posts?categoriesSlug=${category}`)
      .then(callback);
  }
}
