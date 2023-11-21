import { h } from 'vanilla-v-dom';
import { filterItems } from './components/constants';
import {
  CreateForm, Filter, Header, TodoList, Counter,
} from './components';

/**
 * Todo 앱 템플릿
 * @param {array} todos
 * @param {string} hash
 * @returns
 */
const Template = (todos, hash) => {
  const count = todos.length;

  return (
    h(
      'div',
      { id: 'root' },
      h('h1', { id: 'title-block' }, '🎒 ToDo'),
      Header(), // 헤더 컴포넌트
      h(
        'section',
        null,
        Filter(filterItems), // 네비게이션 컴포넌트에 filterItems 전달
        Counter(count, hash),
        TodoList(todos), // Todo-List 컴포넌트에 todos 전달
        hash === 'all' ? CreateForm() : null, // 새로운 Todo 입력 컴포넌트
      ),
    )
  );
};

export default Template;
