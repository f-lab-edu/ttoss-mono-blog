import { TEXT_ELEMENT } from './constants';

/**
 * `value`가 `Object`인지 확인한다.
 *  이후 deep copy 패키지 생성 후 모듈 대체 예정
 * @param {*} value
 * @returns {boolean}
 */
const isObject = (value) => value?.constructor === Object
    || (value?.constructor === undefined && typeof value === 'object');

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

  if (props && isObject(props)) {
    Object.entries(props).forEach(([key, value]) => {
      // HTMLInputElement의 경우 checked="false" 또한 checked로 처리
      if (key === 'checked') node.checked = value;

      node.setAttribute(key, value);
    });
  }

  if (children && Array.isArray(children)) {
    children.forEach((child) => {
      if (child && isObject(child)) {
        node.appendChild(createElement(child));
      }
    });
  }

  return node;
};

export default createElement;
