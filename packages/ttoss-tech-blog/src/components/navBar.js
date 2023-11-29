/** @jsx h */
import { h } from 'vanilla-v-dom';
import { LOGO_ARIA_LABEL } from './constants';
import '../styles/nav.css';

export default function NavBar(items) {
  return (
    <nav class="nav-bar">
      <div class="logo-container" aria-label={LOGO_ARIA_LABEL}>
        <a class="logo-icon" href="/tech" data-resource-path="/tech">
          <object aria-label="toss-logo" class="icon" type="image/svg+xml" data="/toss-logo.svg" />
        </a>
      </div>
      <div class="right-on-mobile">
        <button type="button" class="dropdown-toggler">
          <span class="icon">
            <object aria-label="list-button" class="icon" type="image/svg+xml" data="/list-button.svg" />
          </span>
        </button>
      </div>
      <ul>{items.map(({ title, href }) => <li class="nav-bar-item" data-resource-path={href}>{title}</li>)}</ul>
    </nav>
  );
}
