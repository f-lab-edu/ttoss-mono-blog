/** @jsx h */
import { h } from 'vanilla-v-dom';
import classNames from 'classnames/bind';
import styles from './articleList.module.css';

import { LIST_LABEL } from './constants';
import { Navbar, ArticleCard, Footer } from '../components';

const cx = classNames.bind(styles);

export default function ArticleList({ category, results }) {
  return (
    <div id="root">
      {Navbar()}
      <main class="main">
        <section class="p-container">
          <div class={cx('p-container-inner')}>
            <h1 class={cx('title-label')}>{LIST_LABEL[category]}</h1>
            <ul class={cx('article-list')}>
              {results.map(ArticleCard)}
            </ul>
          </div>
        </section>
      </main>
      {Footer()}
    </div>
  );
}
