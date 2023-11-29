/** @jsx h */
import { h } from 'vanilla-v-dom';
import classNames from 'classnames/bind';
import styles from './navbar.module.css';
import { LOGO_ARIA_LABEL } from './constants';

const cx = classNames.bind(styles);

export default function NavBar(items) {
  return (
    <nav class={cx('navbar')}>
      <div class={cx('navbar-inner')}>
        <div class={cx('logo-container')} aria-label={LOGO_ARIA_LABEL}>
          <a href="/tech" data-resource-path="/tech">
            <object
              aria-label="toss-logo"
              type="image/svg+xml"
              data="/toss-logo.svg"
            />
          </a>
        </div>
        <div class={cx('navbar-content')}>
          <ul class={cx('navbar-menu')}>
            {items.map(({ title, href }) => (
              <li class={cx('navbar-item')} data-resource-path={href}>
                {title}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
}
