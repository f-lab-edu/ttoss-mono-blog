/**
 * `value`가 `Set`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 Set이라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isSet = (value) => value instanceof Set;

export default isSet;
