import {pruneOptions} from 'src/common/options';

describe('Options', () => {
  it('pruneOptions removes null properties', () => {
    let pruned = pruneOptions({
      a: null,
      b: '1',
      c: null,
      d: undefined
    });

    expect(pruned.hasOwnProperty('a')).toBe(false);
    expect(pruned.b).toBe('1');
    expect(pruned.hasOwnProperty('c')).toBe(false);
    expect(pruned.d).toBeUndefined();
    expect(pruned.hasOwnProperty('d')).toBe(true);
  });
});
