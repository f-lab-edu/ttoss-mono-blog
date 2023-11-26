/**
 * `value`가 `Date`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 Date라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isDate = (value) => value instanceof Date;

export default isDate;
