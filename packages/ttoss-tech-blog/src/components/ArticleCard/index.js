/** @jsx h */
import { h } from 'vanilla-v-dom';
import classNames from 'classnames/bind';
import { formatDate } from '../../utils';
import styles from './articleCard.module.css';

const cx = classNames.bind(styles);

export default function ArticleCard({
  id, key, thumbnailConfig, title, subtitle, updatedTime,
}) {
  return (
    <li key={id}>
      <a
        class={cx('article-card')}
        href={`/article/${key}`}
        data-resource-path={`/article/${key}`}
      >
        <img
          class={cx('thumb-img')}
          srcset={thumbnailConfig.imageUrl}
          alt={thumbnailConfig.imageAlt}
        />
        <div>
          <span class={cx('card-title')}>{title}</span>
          <span class={cx('subtitle')}>{subtitle}</span>
          <time class={cx('update-time')}>{formatDate(updatedTime)}</time>
        </div>
      </a>
    </li>
  );
}
