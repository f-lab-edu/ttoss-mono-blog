import copyObject from '../src/copyObject';

describe('copyObject', () => {
  const object = {
    foo: { b: { c: { d: { e: 'f' } } } },
    bar: {},
    udf: undefined,
  };
  const cloned = copyObject(object);

  it('`copyObject`는 객체에 얕은 복사를 수행한다.', () => {
    expect(object).toEqual(cloned);
    expect(object).toStrictEqual(cloned);
    expect(object === cloned).toBe(false);
    expect(object.foo === cloned.foo).toBe(true);
  });
});
