import diff from './diff';
import patch from './patch';
import createElement from './createElement';

/**
 * @param {HTMLElement} container
 * @returns {function}
 */
const render = (container) => {
  /** @type {object} */
  let virtualDOM;

  /**
   * 현재 가상 DOM과 업데이트된 가상 DOM 간의 변경 내용을 기반으로
   * 실제 DOM을 업데이트하는 함수
   *
   * @param {object} updated
   */
  return function (updated) {
    if (!virtualDOM) {
      // 가상 DOM이 정의되지 않았을 경우, 초기 DOM 생성
      container.replaceWith(createElement(updated));
    } else {
      // 변경 내용을 적용
      patch(container, diff(updated, virtualDOM));
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

export default { createRoot };
