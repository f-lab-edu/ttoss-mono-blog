import isWeakMap from '../src/isWeakMap';

describe('isWeakMap', () => {
  it('WeakMap이라면 `true`를 리턴한다.', () => {
    expect(isWeakMap(new WeakMap())).toBeTruthy();
  });

  it('WeakMap이 아니라면 `false`를 리턴한다.', () => {
    expect(isWeakMap(1)).toBeFalsy();
    expect(isWeakMap('a')).toBeFalsy();
    expect(isWeakMap(true)).toBeFalsy();
    expect(isWeakMap(/\w+/)).toBeFalsy();
    expect(isWeakMap({ user: 'barney', age: 36, active: true })).toBeFalsy();
    expect(isWeakMap(['a', 'r', 'r', 'a', 'y'])).toBeFalsy();
    expect(isWeakMap(new Date())).toBeFalsy();
    expect(isWeakMap(new Set())).toBeFalsy();
    expect(isWeakMap(new Map())).toBeFalsy();
    expect(isWeakMap(new WeakSet())).toBeFalsy();
    expect(isWeakMap(new Error())).toBeFalsy();
    expect(isWeakMap(Symbol(''))).toBeFalsy();
    expect(isWeakMap(() => {})).toBeFalsy();
  });
});
