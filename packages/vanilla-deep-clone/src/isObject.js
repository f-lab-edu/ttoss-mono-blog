/**
 * `value`가 `Object`인지 확인한다.
 * @param {*} value
 * @returns {boolean} `value`가 Object라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isObject = (value) => value?.constructor === Object
    || (value?.constructor === undefined && typeof value === 'object');

export default isObject;
