import { TEXT_ELEMENT } from './constants';

/**
 * 가상의 노드에서 실제 DOM 노드 생성
 * @function
 * @param {object} virtual
 * @param {string} virtual.type
 * @param {object} [virtual.props]
 * @param {(string | object)[]} [virtual.children]
 * @returns {Node | undefined}
 */
const createElement = ({ type, props, children }) => {
  if (!type) return null;
  if (type === TEXT_ELEMENT) return document.createTextNode(props.nodeValue);

  const node = document.createElement(type);

  // props가 존재하면 속성 설정
  if (props && typeof props === 'object') {
    Object.entries(props).forEach(([key, value]) => node.setAttribute(key, value));
  }

  // children이 존재하면 추가
  if (children && Array.isArray(children)) {
    children.forEach((child) => {
      node.append(createElement(child));
    });
  }

  return node;
};

export default createElement;
