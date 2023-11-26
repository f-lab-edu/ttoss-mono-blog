import cloneArrayBufferView from './cloneArrayBufferView';
/**
 * `typedArray`을 복사한다.
 * @param {Object} source
 * @param {boolean} isDeep
 * @returns {Object} 복사된 `typedArray`를 리턴한다.
 */
const copyTypedArray = (source, isDeep) => {
  const result = cloneArrayBufferView(source, isDeep);
  result.set(source, 0);
  return result;
};

export default copyTypedArray;
