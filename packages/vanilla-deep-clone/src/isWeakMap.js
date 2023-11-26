/**
 * `value`가 `WeakMap`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 WeakMap이라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isWeakMap = (value) => value instanceof WeakMap;

export default isWeakMap;
