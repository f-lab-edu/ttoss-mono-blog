import isFunction from '../src/isFunction';

describe('isFunction', () => {
  it('Function이라면 `true`를 리턴한다.', () => {
    function func() {}

    expect(isFunction(func)).toBeTruthy();
  });

  it('Async Function이라면 `true`를 리턴한다.', () => {
    async function asyncFunc() {
      const result = await (() => new Promise((resolve) => {
        setTimeout(() => resolve(200), 2000);
      }))();
      return result;
    }
    expect(isFunction(asyncFunc)).toBeTruthy();
  });

  it('Generator Function이라면 `true`를 리턴한다.', () => {
    function* generator(i) {
      yield i;
      yield i + 10;
    }

    expect(isFunction(generator)).toBeTruthy();
  });

  it('Function이 아니라면 `false`를 리턴한다.', () => {
    expect(isFunction(1)).toBeFalsy();
    expect(isFunction('a')).toBeFalsy();
    expect(isFunction(true)).toBeFalsy();
    expect(isFunction(/\w+/)).toBeFalsy();
    expect(isFunction({ user: 'barney', age: 36, active: true })).toBeFalsy();
    expect(isFunction(['a', 'r', 'r', 'a', 'y'])).toBeFalsy();
    expect(isFunction(new Set())).toBeFalsy();
    expect(isFunction(new Map())).toBeFalsy();
    expect(isFunction(new WeakSet())).toBeFalsy();
    expect(isFunction(new WeakMap())).toBeFalsy();
    expect(isFunction(new Error())).toBeFalsy();
    expect(isFunction(Symbol(''))).toBeFalsy();
    expect(isFunction(document && document.getElementsByTagName('body'))).toBeFalsy();
  });
});
