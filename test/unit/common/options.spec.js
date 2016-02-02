import {pruneOptions} from 'src/common/options';

describe('Options', () => {
  it('pruneOptions removes null properties', () => {
    let pruned = pruneOptions({
      a: null,
      b: '1',
      c: 0,
      d: undefined
    });

    expect(pruned.hasOwnProperty('a')).toBe(false);
    expect(pruned.b).toBe('1');
    expect(pruned.c).toBe(0);
    expect(pruned.hasOwnProperty('d')).toBe(false);
  });
});
