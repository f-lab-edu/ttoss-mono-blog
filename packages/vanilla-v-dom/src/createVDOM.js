import { TEXT_ELEMENT, NONE_WHITE_SPACE } from './constants';
import h from './h';

/**
 * HTML에 작성한 줄바꿈(\n), 공백 문자 또한 자식 노드로 취급한다.
 *
 * @param {Node} node
 * @returns {boolean} 제외 여부
 */
const isExcludedNode = ({ nodeType, nodeValue }) => (
  !!(nodeType === Node.COMMENT_NODE
    || (nodeType === Node.TEXT_NODE && !nodeValue.match(NONE_WHITE_SPACE)))
);

/**
 * 실제 엘리먼트를 기반으로 트리 구조의 가상 DOM 생성
 * @param {Node} node
 * @returns {object}
 */
const createVDOM = (node) => {
  if (isExcludedNode(node)) {
    node.parentNode.removeChild(node);
    return null;
  }

  if (node.nodeType === Node.TEXT_NODE) {
    return h(TEXT_ELEMENT, null, node.nodeValue);
  }

  if (node.nodeType === Node.ELEMENT_NODE) {
    const type = node.nodeName.toLowerCase();
    const props = Object.fromEntries([...node.attributes].map((item) => [item.name, item.value]));
    const children = Array.from(node.childNodes).map(createVDOM).filter(Boolean);

    return h(type, props, ...children);
  }

  return null;
};

export default createVDOM;
