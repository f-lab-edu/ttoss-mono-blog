/** @jsx h */
import { h } from 'vanilla-v-dom';
import { Navbar, ArticleContent, Footer } from '../components';

export default function ArticleView(data) {
  return (
    <div id="root">
      {Navbar()}
      <main class="main">
        {ArticleContent(data)}
      </main>
      {Footer()}
    </div>
  );
}
