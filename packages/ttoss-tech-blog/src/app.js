import Router from 'vanilla-router';
import Model from './model';
import View from './view';
import Controller from './controller';

const App = () => {
  const controller = new Controller(new Model(), new View());
  const router = Router.createHistoryRouter(document.getElementById('root'));

  router.addRoute('/', () => controller.setArticleList('tech'));
  router.addRoute('/tech', () => controller.setArticleList('tech'));
  router.addRoute('/design', () => controller.setArticleList('design'));
  router.addRoute('/article/:title', ({ params }) => controller.setArticle(params));
};

export default App;
