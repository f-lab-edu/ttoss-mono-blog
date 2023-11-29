/** @jsx h */
import { h } from 'vanilla-v-dom';
import classNames from 'classnames/bind';
import styles from './articleList.module.css';
import ArticleCard from './articleCard';
import { LIST_LABEL } from './constants';

const cx = classNames.bind(styles);

export default function ArticleList({ category, results }) {
  return (
    <section class="p-container">
      <div class={cx('p-container-inner')}>
        <h1 class={cx('title-label')}>{LIST_LABEL[category]}</h1>
        <ul class={cx('article-list')}>
          {results.map((data) => ArticleCard(data))}
        </ul>
      </div>
    </section>
  );
}
