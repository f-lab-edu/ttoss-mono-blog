import isSet from '../src/isSet';

describe('isSet', () => {
  it('Set 객체라면 `true`를 리턴한다.', () => {
    expect(isSet(new Set())).toBeTruthy();
  });

  it('Set 객체가 아니라면 `false`를 리턴한다.', () => {
    expect(isSet(1)).toBeFalsy();
    expect(isSet('a')).toBeFalsy();
    expect(isSet(true)).toBeFalsy();
    expect(isSet(/\w+/)).toBeFalsy();
    expect(isSet({ user: 'barney', age: 36, active: true })).toBeFalsy();
    expect(isSet(['a', 'r', 'r', 'a', 'y'])).toBeFalsy();
    expect(isSet(new Date())).toBeFalsy();
    expect(isSet(new Map())).toBeFalsy();
    expect(isSet(new WeakSet())).toBeFalsy();
    expect(isSet(new WeakMap())).toBeFalsy();
    expect(isSet(new Error())).toBeFalsy();
    expect(isSet(Symbol(''))).toBeFalsy();
    expect(isSet(() => {})).toBeFalsy();
  });
});
