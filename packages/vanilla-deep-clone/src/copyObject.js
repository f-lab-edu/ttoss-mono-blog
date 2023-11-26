/**
 * `Object`를 복사한다.
 * @param {Object} source
 * @returns {Object} 복사된 `Object`를 리턴한다.
 */
const copyObject = (source) => (
  Object.keys(source).reduce((a, c) => ({ ...a, [c]: source[c] }), {})
);

export default copyObject;
