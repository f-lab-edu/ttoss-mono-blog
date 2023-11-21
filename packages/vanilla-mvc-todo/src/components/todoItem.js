import { h } from 'vanilla-v-dom';

export default function TodoItem(todo) {
  const checked = todo.completed ? { checked: todo.completed } : {};

  return (
    h(
      'li',
      { 'data-id': todo.id, 'data-completed': todo.completed },
      h('input', { type: 'checkbox', 'data-action': 'toggle', ...checked }),
      h('label', { 'data-action': 'edit' }, todo.todo),
      h('button', { type: 'button', 'data-action': 'delete' }, '삭제'),
    )
  );
}
