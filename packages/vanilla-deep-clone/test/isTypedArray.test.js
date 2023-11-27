import isTypedArray from '../src/isTypedArray';

describe('isTypedArray', () => {
  it('TypedArray로 분류된다면 `true`를 리턴한다.', () => {
    expect(isTypedArray(new Int8Array())).toBe(true);
    expect(isTypedArray(new Uint8Array())).toBe(true);
    expect(isTypedArray(new Uint8ClampedArray())).toBe(true);
    expect(isTypedArray(new Int16Array())).toBe(true);
    expect(isTypedArray(new Uint16Array())).toBe(true);
    expect(isTypedArray(new Int32Array())).toBe(true);
    expect(isTypedArray(new Uint32Array())).toBe(true);
    expect(isTypedArray(new Float32Array())).toBe(true);
    expect(isTypedArray(new Float64Array())).toBe(true);
    // expect(isTypedArray(new BigInt64Array())).toBe(true);
    // expect(isTypedArray(new BigUint64Array())).toBe(true);
  });

  it('TypedArray로 분류되지 않는다면 `false`를 리턴한다.', () => {
    expect(isTypedArray(null)).toBe(false);
    expect(isTypedArray(undefined)).toBe(false);
    expect(isTypedArray(true)).toBe(false);
    expect(isTypedArray(false)).toBe(false);
    expect(isTypedArray(1)).toBe(false);
    expect(isTypedArray(NaN)).toBe(false);
    expect(isTypedArray(Infinity)).toBe(false);
    expect(isTypedArray(() => {})).toBe(false);
    expect(isTypedArray(() => {})).toBe(false);
    expect(isTypedArray([])).toBe(false);
    expect(isTypedArray({})).toBe(false);
    expect(isTypedArray(new RegExp())).toBe(false);
  });
});
