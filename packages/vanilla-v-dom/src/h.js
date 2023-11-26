import { TEXT_ELEMENT } from './constants';

/**
 * 가상 DOM object 생성
 * @param {string} type
 * @param {object} props
 * @param  {...(string|object)} children
 * @returns
 */
const h = (type, props, ...children) => ({
  type,
  props: props || {},
  children: children.map((child) => {
    // 만약 문자열이나 숫자면 그대로 반환
    if (typeof child === 'string' || typeof child === 'number') {
      return { type: TEXT_ELEMENT, props: { nodeValue: child } };
    }
    // 아니면 자식 노드로 처리
    return child;
  }).filter(Boolean),
});

export default h;
