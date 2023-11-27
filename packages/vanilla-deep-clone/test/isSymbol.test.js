import isSymbol from '../src/isSymbol';

describe('isSymbol', () => {
  it('Symbol이라면 `true`를 리턴한다.', () => {
    expect(isSymbol(Symbol(''))).toBeTruthy();
    expect(isSymbol(Object(Symbol('')))).toBeTruthy();
  });

  it('Symbol이 아니라면 `false`를 리턴한다.', () => {
    expect(isSymbol(1)).toBeFalsy();
    expect(isSymbol('a')).toBeFalsy();
    expect(isSymbol(true)).toBeFalsy();
    expect(isSymbol(/\w+/)).toBeFalsy();
    expect(isSymbol({ user: 'barney', age: 36, active: true })).toBeFalsy();
    expect(isSymbol(['a', 'r', 'r', 'a', 'y'])).toBeFalsy();
    expect(isSymbol(new Date())).toBeFalsy();
    expect(isSymbol(new Set())).toBeFalsy();
    expect(isSymbol(new Map())).toBeFalsy();
    expect(isSymbol(new WeakSet())).toBeFalsy();
    expect(isSymbol(new WeakMap())).toBeFalsy();
    expect(isSymbol(new Error())).toBeFalsy();
    expect(isSymbol(() => {})).toBeFalsy();
  });
});
