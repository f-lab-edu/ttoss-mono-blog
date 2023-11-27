import deepClone from '../src/deepClone';

describe('deepClone', () => {
  it('`deepClone`는 `객체 배열`에 원본과의 참조가 끊어진 깊은 복사를 수행한다.', () => {
    const array = [
      {
        foo: { b: { c: { d: { e: 'f' } } } },
        bar: {},
      },
    ];
    const cloned = deepClone(array);

    expect(array === cloned).toBe(false);
    expect(array[0].foo === cloned[0].foo).toBe(false);
    expect(array[0].foo.b === cloned[0].foo.b).toBe(false);
    expect(array[0].foo.b.c === cloned[0].foo.b.c).toBe(false);
  });

  test('`deepClone`는 `중첩 객체`에 원본과의 참조가 끊어진 깊은 복사를 수행한다.', () => {
    const nested = {
      func: () => {},
      set: new Set(['a', { foo: 2 }]),
      map: new Map([
        [1, 'one'],
        [2, 'two'],
        [3, 'three'],
      ]),
      re: /[\u0400-\u04FF]+/g,
      date: new Date(),
      array: ['a', 'r', 'r', 'a', 'y'],
      object: { foo: { b: { c: { d: { e: 'f' } } } } },
    };
    const cloned = deepClone(nested);

    expect(nested === cloned).toBe(false);
    expect(nested.func === cloned.func).toBe(false);
    expect(nested.map === cloned.map).toBe(false);
    expect(nested.object.foo.b.c === cloned.object.foo.b.c).toBe(false);
  });
});
