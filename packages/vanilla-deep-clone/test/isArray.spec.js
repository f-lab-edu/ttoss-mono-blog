import isArray from '../src/isArray';

describe('isArray', () => {
  it('배열이라면 `true`를 리턴한다.', () => {
    expect(isArray(['a', 'r', 'r', 'a', 'y'])).toBeTruthy();
  });

  it('배열이 아니라면 `false`를 리턴한다.', () => {
    expect(isArray(1)).toBeFalsy();
    expect(isArray('a')).toBeFalsy();
    expect(isArray(true)).toBeFalsy();
    expect(isArray(/\w+/)).toBeFalsy();
    expect(isArray({ user: 'barney', age: 36, active: true })).toBeFalsy();
    expect(isArray(new Date())).toBeFalsy();
    expect(isArray(new Set())).toBeFalsy();
    expect(isArray(new Map())).toBeFalsy();
    expect(isArray(new WeakSet())).toBeFalsy();
    expect(isArray(new WeakMap())).toBeFalsy();
    expect(isArray(new Error())).toBeFalsy();
    expect(isArray(Symbol(''))).toBeFalsy();
    expect(isArray(() => {})).toBeFalsy();
  });
});
