/**
 * @param {Object} source
 * @returns {Object} 복사된 `RegExp`를 리턴한다.
 */
const copyRegExp = (source) => {
  const result = new RegExp(source.source, source.flags);
  if (source.global) {
    result.lastIndex = source.lastIndex;
  }
  return result;
};

export default copyRegExp;
