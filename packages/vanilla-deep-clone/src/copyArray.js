/**
 * `Array`를 복사한다.
 * @param {Array} source
 * @returns {Array} 복사된 `Array`를 리턴한다.
 */
const copyArray = (source) => (
  source.reduce((a, c) => {
    a.push(c);
    return a;
  }, [])
);

export default copyArray;
