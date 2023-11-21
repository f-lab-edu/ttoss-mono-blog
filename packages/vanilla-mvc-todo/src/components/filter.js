import { h } from 'vanilla-v-dom';

export default function Filter(filter) {
  const generateFilterItem = (status) => (
    h(
      'li',
      { 'data-status': 'all', class: 'selected' },
      h('a', { href: `#${status}` }, `${status.charAt(0).toUpperCase() + status.slice(1)}`),
    )
  );

  return (
    h(
      'ul',
      { id: 'filter' },
      ...filter.map(generateFilterItem),
    )
  );
}
