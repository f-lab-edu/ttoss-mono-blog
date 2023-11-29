/** @jsx h */
import { h } from 'vanilla-v-dom';
import classNames from 'classnames/bind';
import styles from './footer.module.css';
import { COMPANY_NAME, COPYRIGHT, SITE_GROUP_LISTS } from '../constants';

const cx = classNames.bind(styles);

export default function Footer() {
  return (
    <footer class={cx('footer')}>
      <div class={cx('footer-inner')}>
        <div class={cx('site-group-list')}>
          {SITE_GROUP_LISTS.map(({ title, items }) => (
            <ul class={cx('site-group')}>
              <li class={cx('site-group-title')}>{title}</li>
              {items.map((text) => (
                <li class={cx('site-group-item')}>{text}</li>
              ))}
            </ul>
          ))}
        </div>
        <address class={cx('address')}>
          <strong class={cx('company-name')}>{COMPANY_NAME}</strong>
          {COPYRIGHT}
        </address>
      </div>
    </footer>
  );
}
