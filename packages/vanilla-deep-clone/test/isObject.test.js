import isObject from '../src/isObject';

describe('isObject', () => {
  it('객체라면 `true`를 리턴한다.', () => {
    expect(isObject({ user: 'barney', age: 36, active: true })).toBe(true);
  });

  it('[[prototype]]이 null인 객체일 때 `true`를 리턴한다.', () => {
    expect(isObject(Object.create(null))).toBe(true);
  });

  it('[[prototype]]이 Obejct가 아닌 객체일 때 `false`를 리턴한다.', () => {
    const object = { 0: 1 };
    object.constructor = Array;

    expect(isObject(object)).toBe(false);
  });

  it('객체가 아니라면 `false`를 리턴한다.', () => {
    function Foo(a) {
      return a;
    }

    expect(isObject(1)).toBe(false);
    expect(isObject('a')).toBe(false);
    expect(isObject(true)).toBe(false);
    expect(isObject(/\w+/)).toBe(false);
    expect(isObject(['a', 'r', 'r', 'a', 'y'])).toBe(false);
    expect(isObject(Object('string'))).toBe(false);
    expect(isObject(new Date())).toBe(false);
    expect(isObject(new Error())).toBe(false);
    expect(isObject(new WeakMap())).toBe(false);
    expect(isObject(new WeakSet())).toBe(false);
    expect(isObject(() => {})).toBe(false);
    expect(isObject(new Foo())).toBe(false);
    expect(isObject(document && document.createElement('div'))).toBe(false);
  });
});
