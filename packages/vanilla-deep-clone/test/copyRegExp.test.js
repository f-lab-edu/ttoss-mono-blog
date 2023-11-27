import copyRegExp from '../src/copyRegExp';

describe('copyRegExp', () => {
  it('`copyRegExp`는 복사를 수행한다.', () => {
    const re = /c/i;
    const copied = copyRegExp(re);

    expect(re === copied).toBe(false);
    expect(re.source === copied.source).toBe(true);
    expect(re.flags === copied.flags).toBe(true);
  });

  it('`copyRegExp`는 global flag를 포함 할 경우 lastIndex 프로퍼티도 복사를 수행한다.', () => {
    const re = /c/g;
    re.exec('abc');

    expect(re.lastIndex === copyRegExp(re).lastIndex).toBe(true);
  });
});
