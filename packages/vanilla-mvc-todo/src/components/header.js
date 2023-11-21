import { h } from 'vanilla-v-dom';

export default function Header(date) {
  const now = date || new Date();
  const locales = 'ko-KR';
  const day = now.toLocaleDateString(locales, { weekday: 'long' });
  const fulldate = now.toLocaleDateString(locales, {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    h(
      'header',
      null,
      h(
        'time',
        { id: 'date-value' },
        h('h3', { id: 'day' }, day),
        h('span', { id: 'fulldate' }),
      ),
      h('div', { id: 'task-left' }, fulldate),
    )
  );
}
