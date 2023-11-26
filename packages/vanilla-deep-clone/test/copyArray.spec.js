import copyArray from '../src/copyArray';

describe('copyArray', () => {
  const array = [
    {
      foo: { b: { c: { d: { e: 'f' } } } },
      bar: {},
      udf: undefined,
    },
  ];
  const cloned = copyArray(array);

  it('`copyArray`는 배열에 얕은 복사를 수행한다.', () => {
    expect(array).toEqual(cloned);
    expect(array).toStrictEqual(cloned);
    expect(array === cloned).toBe(false);
    expect(array.foo === cloned.foo).toBe(true);
  });
});
