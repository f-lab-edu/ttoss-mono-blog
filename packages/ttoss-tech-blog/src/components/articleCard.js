/** @jsx h */
import { h } from 'vanilla-v-dom';

const formatDate = (date) => new Date(date).toLocaleDateString('ko-Kore-KR', { year: 'numeric', month: 'numeric', day: 'numeric' });

export default function ArticleCard({
  id, key, thumbnailConfig, title, subtitle, updatedTime,
}) {
  return (
    <li key={id}>
      <a class="article-card" href={`/article/${key}`} data-resource-path={`/article/${key}`}>
        <img class="thumb-img" srcset={thumbnailConfig.imageUrl} alt={thumbnailConfig.imageAlt} />
        <div>
          <span class="title">{title}</span>
          <span class="subtle">{subtitle}</span>
          <time class="update-time">{formatDate(updatedTime)}</time>
        </div>
      </a>
    </li>
  );
}
