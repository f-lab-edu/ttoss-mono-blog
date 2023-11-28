export default class Controller {
  constructor(model, view) {
    this.model = model;
    this.view = view;
  }

  setArticle(title) {
    this.model.getArticle(title, (data) => this.view.renderArticle(data));
  }

  setArticleList(category) {
    this.model.getArticleList(category, (data) => this.view.renderArticleList(data));
  }
}
