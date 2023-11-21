import { h } from 'vanilla-v-dom';
import TodoItem from './todoItem';

export default function TodoList(todos = []) {
  return (
    h(
      'ul',
      { class: 'todo-list' },
      ...todos.map(TodoItem),
    )
  );
}
