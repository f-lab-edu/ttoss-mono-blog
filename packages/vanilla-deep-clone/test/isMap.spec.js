import isMap from '../src/isMap';

describe('isMap', () => {
  it('Map 객체라면 `true`를 리턴한다.', () => {
    expect(isMap(new Map())).toBeTruthy();
  });

  it('Map 객체가 아니라면 `false`를 리턴한다.', () => {
    expect(isMap(1)).toBeFalsy();
    expect(isMap('a')).toBeFalsy();
    expect(isMap(true)).toBeFalsy();
    expect(isMap(/\w+/)).toBeFalsy();
    expect(isMap({ user: 'barney', age: 36, active: true })).toBeFalsy();
    expect(isMap(['a', 'r', 'r', 'a', 'y'])).toBeFalsy();
    expect(isMap(new Date())).toBeFalsy();
    expect(isMap(new Set())).toBeFalsy();
    expect(isMap(new WeakSet())).toBeFalsy();
    expect(isMap(new WeakMap())).toBeFalsy();
    expect(isMap(new Error())).toBeFalsy();
    expect(isMap(Symbol(''))).toBeFalsy();
    expect(isMap(() => {})).toBeFalsy();
  });
});
