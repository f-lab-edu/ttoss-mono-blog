/**
 * @param {ArrayBuffer} source
 * @returns {ArrayBuffer} 복제한 `ArrayBuffer`를 리턴한다.
 */
const cloneArrayBuffer = (source) => (
  source.resizable
    ? new source.constructor(source.byteLength, { maxByteLength: source.maxByteLength })
    : new source.constructor(source.byteLength)
);

export default cloneArrayBuffer;
