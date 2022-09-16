import { staircase } from '../src/staircase';

test('test staircase function', () => {
  const result = staircase(6);

  expect(result).toBe(`     #\n    ##\n   ###\n  ####\n #####\n######\n`);
});
