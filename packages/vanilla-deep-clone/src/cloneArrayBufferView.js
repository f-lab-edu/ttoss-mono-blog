import cloneArrayBuffer from './cloneArrayBuffer';
/**
 * `ArrayBufferView`를 복제한다.
 * @param {Object} source
 * @param {boolean} isDeep
 * @returns {Object} 복제된 `ArrayBufferView`를 리턴한다.
 */
const cloneArrayBufferView = (source, isDeep) => {
  const buffer = isDeep ? cloneArrayBuffer(source.buffer) : source.buffer;
  return new source.constructor(buffer, source.byteOffset, source.length);
};

export default cloneArrayBufferView;
