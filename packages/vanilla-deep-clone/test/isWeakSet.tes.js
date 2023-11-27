import isWeakSet from '../src/isWeakSet';

describe('isWeakSet', () => {
  it('WeakSet 객체라면 `true`를 리턴한다.', () => {
    expect(isWeakSet(new WeakSet())).toBeTruthy();
  });

  it('WeakSet 객체가 아니라면 `false`를 리턴한다.', () => {
    expect(isWeakSet(1)).toBeFalsy();
    expect(isWeakSet('a')).toBeFalsy();
    expect(isWeakSet(true)).toBeFalsy();
    expect(isWeakSet(/\w+/)).toBeFalsy();
    expect(isWeakSet({ user: 'barney', age: 36, active: true })).toBeFalsy();
    expect(isWeakSet(['a', 'r', 'r', 'a', 'y'])).toBeFalsy();
    expect(isWeakSet(new Date())).toBeFalsy();
    expect(isWeakSet(new Set())).toBeFalsy();
    expect(isWeakSet(new Map())).toBeFalsy();
    expect(isWeakSet(new WeakMap())).toBeFalsy();
    expect(isWeakSet(new Error())).toBeFalsy();
    expect(isWeakSet(Symbol(''))).toBeFalsy();
    expect(isWeakSet(() => {})).toBeFalsy();
  });
});
