import copyTypedArray from '../src/copyTypedArray';

describe('copyTypedArray', () => {
  const buffer = new ArrayBuffer(8);
  const original = new Int8Array(buffer, 1, 4);
  original[0] = 21;

  it('`copyTypedArray`는 얕은 복사를 수행한다.', () => {
    const cloned = copyTypedArray(original);

    expect(original === cloned).toBe(false);
    expect(original.constructor === cloned.constructor).toBe(true);
    expect(original[0] === cloned[0]).toBe(true);
    expect(original.buffer === cloned.buffer).toBe(true);
    expect(original.byteLength === cloned.byteLength).toBe(true);
    expect(original.byteOffset === cloned.byteOffset).toBe(true);
    expect(original.length === cloned.length).toBe(true);
  });

  it('`copyTypedArray`는 깊은 복사를 수행한다.', () => {
    const isDeep = true;
    const cloned = copyTypedArray(original, isDeep);

    expect(original === cloned).toBe(false);
    expect(original.constructor === cloned.constructor).toBe(true);
    expect(original[0] === cloned[0]).toBe(true);
    expect(original.buffer === cloned.buffer).toBe(false);
    expect(original.byteLength === cloned.byteLength).toBe(true);
    expect(original.byteOffset === cloned.byteOffset).toBe(true);
    expect(original.length === cloned.length).toBe(true);
  });
});
