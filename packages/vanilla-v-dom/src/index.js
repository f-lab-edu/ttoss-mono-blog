import createVDOM from './createVDOM';
import h from './h';
import diff from './diff';
import patch from './patch';

/**
 * @param {HTMLElement} container
 * @returns {function}
 */
const render = (container) => {
  /** @type {object} */
  let virtualDOM = createVDOM(container);

  /**
   * 현재 가상 DOM과 업데이트된 가상 DOM 간의 변경 내용을 기반으로
   * 실제 DOM을 업데이트하는 함수
   *
   * @param {object} updated
   */
  return function (updated) {
    // 변경 내용을 적용
    if (virtualDOM) {
      patch(container, diff(virtualDOM, updated));
    }
    // 가상 DOM 참조 업데이트
    virtualDOM = updated;
  };
};

/**
 * @param {HTMLElement} domNode
 * @returns {object}
 */
const createRoot = (domNode) => ({
  render: render.call(this, domNode),
});

export { h, createRoot };
