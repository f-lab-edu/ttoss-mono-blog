import { h } from 'vanilla-v-dom';
import { counterText } from './constants';

export default function Counter(count, active) {
  return (
    h(
      'div',
      null,
      counterText[active],
      h('strong', null, count),
      '개 입니다.',
    )
  );
}
