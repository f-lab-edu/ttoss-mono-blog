/**
 * `value`가 `Function`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 Function이라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isFunction = (value) => value?.constructor === Function || typeof value === 'function';

export default isFunction;
