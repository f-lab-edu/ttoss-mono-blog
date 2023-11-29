/** @jsx h */
import { createRoot } from 'vanilla-v-dom';
import ArticleList from './pages/articleList';
import ArticleView from './pages/articleView';

export default class View {
  constructor(domNode) {
    this.render = createRoot(domNode).render;
  }

  renderArticle(data) {
    this.render(
      ArticleView(data),
    );
  }

  renderArticleList(category, data) {
    this.render(
      ArticleList({ ...data, category }),
    );
  }
}
