/** @jsx h */
import { h } from 'vanilla-v-dom';

export default function ArticlePage({
  thumbnailConfig, editor, updatedTime, title, shortDescription,
}) {
  return (
    <article>
      <header>
        <img class="thumbnail" srcSet={thumbnailConfig.imageUrl} alt={thumbnailConfig.imageAlt} />
        <h1 class="title">{title}</h1>
        <section class="author-container">
          <img srcSet={editor.imageUrl} alt="profile-img" />
          <div>
            <span class="author">{editor.name}</span>
            <time class="update-time">{updatedTime}</time>
          </div>
        </section>
      </header>
      <section>
        {shortDescription}
      </section>
    </article>
  );
}
