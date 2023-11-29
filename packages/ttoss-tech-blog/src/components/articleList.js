/** @jsx h */
import { h } from 'vanilla-v-dom';
import { LIST_LABEL } from './constants';
import ArticleCard from './articleCard';

export default function ArticleList({ category, results }) {
  return (
    <section class="container">
      <div class="container-inner">
        <div>{LIST_LABEL[category]}</div>
        <ul class="article-list">
          {results.map((data) => ArticleCard(data))}
        </ul>
      </div>
    </section>
  );
}
