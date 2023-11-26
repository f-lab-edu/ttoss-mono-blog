import isRegExp from '../src/isRegExp';

describe('isRegExp', () => {
  it('RegExp라면 `true`를 리턴한다.', () => {
    expect(isRegExp(/\w+/)).toBeTruthy();
  });

  it('RegExp가 아니라면 `false`를 리턴한다.', () => {
    expect(isRegExp(1)).toBeFalsy();
    expect(isRegExp('a')).toBeFalsy();
    expect(isRegExp(true)).toBeFalsy();
    expect(isRegExp({ user: 'barney', age: 36, active: true })).toBeFalsy();
    expect(isRegExp(['a', 'r', 'r', 'a', 'y'])).toBeFalsy();
    expect(isRegExp(new Date())).toBeFalsy();
    expect(isRegExp(new Set())).toBeFalsy();
    expect(isRegExp(new Map())).toBeFalsy();
    expect(isRegExp(new WeakSet())).toBeFalsy();
    expect(isRegExp(new WeakMap())).toBeFalsy();
    expect(isRegExp(new Error())).toBeFalsy();
    expect(isRegExp(Symbol(''))).toBeFalsy();
    expect(isRegExp(() => {})).toBeFalsy();
  });
});
