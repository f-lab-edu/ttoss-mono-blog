import { h } from 'vanilla-v-dom';

export default function CreateForm() {
  return (
    h(
      'div',
      { id: 'new-todo-form' },
      h(
        'input',
        { id: 'date-value', type: 'text', placehoder: '할 일을 등록해 주세요.' },
      ),
      h('button', { id: 'add-btn', type: 'button', 'data-action': 'regist' }, '등록'),
    )
  );
}
