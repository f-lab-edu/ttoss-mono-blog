/**
 * `value`가 `WeakSet`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 WeakSet이라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isWeakSet = (value) => value instanceof WeakSet;

export default isWeakSet;
