/**
 * `value`가 `RegExp`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 RegExp이라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isRegExp = (value) => value instanceof RegExp || value?.constructor === RegExp;

export default isRegExp;
