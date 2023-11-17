import { TEXT_ELEMENT } from './constant';

/**
 * 트리 구조의 가상 DOM 생성 (virtualHyperScript)
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
  }),
});

export default h;
