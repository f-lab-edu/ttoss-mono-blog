/**
 * `value`가 `TypedArray`로 분류되는지 확인한다.
 * (e.g. Int8Array, Uint8Array, Uint8ClampedArray, Int16Array ...)
 * @param {*} value
 * @returns {boolean} `value`가 TypedArray라면 `true`를, 아니라면 `false`를 리턴한다.
 */
const isTypedArray = (value) => {
  const re = /^(?:Int(?:8|16|32))|(?:Uint(?:8|16|32))|(?:Float(?:32|64))|(?:Big(?:Int|Uint)64)(Clamped)?Array$/;
  return re.test(value?.constructor.name) && ArrayBuffer.isView(value);
};

export default isTypedArray;
