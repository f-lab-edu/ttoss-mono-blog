/** @jsx h */
import { h } from 'vanilla-v-dom';
import { COMPANY_NAME, COPYRIGHT } from './constants';
import '../styles/footer.css';

export default function Footer(groups) {
  return (
    <footer class="footer">
      <div class="footer-inner">
        <div class="site-group-list">
          {groups.map(({ title, items }) => (
            <ul class="site-group">
              <li class="site-group-title">{title}</li>
              {items.map((text) => (
                <li>{text}</li>
              ))}
            </ul>
          ))}
        </div>
        <address class="address">
          <strong class="company-name">{COMPANY_NAME}</strong>
          {COPYRIGHT}
        </address>
      </div>
    </footer>
  );
}
