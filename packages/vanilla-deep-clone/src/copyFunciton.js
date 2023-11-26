/**
 * `Function`을 복사한다.
 * @param {Function} source
 * @returns {Function} 복사된 `Function`을 리턴한다.
 */
const copyFunction = (source) => source.bind(this);

export default copyFunction;
