/**
 * `Symbol`을 복사한다.
 * @param {Object} source
 * @returns {Object} 복사된 `Symbol`을 리턴한다.
 */
const copySymbol = (source) => Object(source.valueOf());

export default copySymbol;
