import { TEXT_ELEMENT } from './constants';
import h from './h';

/**
 * 실제 엘리먼트를 기반으로 트리 구조의 가상 DOM 생성
 * @param {Node} node
 * @returns {object}
 */
const createVDOM = (node) => {
  // 텍스트 노드일 경우
  if (node.nodeType === 3) {
    return h(TEXT_ELEMENT, null, node.nodeValue);
  }

  const type = node.nodeName.toLowerCase();
  const props = Object.fromEntries([...node.attributes].map((item) => [item.name, item.value]));
  const children = Array.from(node.childNodes).map((child) => createVDOM(child));

  return h(type, props, ...children);
};

export default createVDOM;
