/**
 * `value`가 `Map`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 Map이라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isMap = (value) => value instanceof Map;

export default isMap;
