import isDate from '../src/isDate';

describe('isDate', () => {
  it('Date라면 `true`를 리턴한다.', () => {
    expect(isDate(new Date())).toBeTruthy();
  });

  it('Date가 아니라면 `false`를 리턴한다.', () => {
    expect(isDate(1)).toBeFalsy();
    expect(isDate('a')).toBeFalsy();
    expect(isDate(true)).toBeFalsy();
    expect(isDate(/\w+/)).toBeFalsy();
    expect(isDate({ user: 'barney', age: 36, active: true })).toBeFalsy();
    expect(isDate(['a', 'r', 'r', 'a', 'y'])).toBeFalsy();
    expect(isDate(new Set())).toBeFalsy();
    expect(isDate(new Map())).toBeFalsy();
    expect(isDate(new WeakSet())).toBeFalsy();
    expect(isDate(new WeakMap())).toBeFalsy();
    expect(isDate(new Error())).toBeFalsy();
    expect(isDate(Symbol(''))).toBeFalsy();
    expect(isDate(() => {})).toBeFalsy();
  });
});
