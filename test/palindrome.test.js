import { palindrome } from '../src/palindrome';

test('test palindrome function', () => {
  expect(palindrome('')).toBe(true);
  expect(palindrome('a')).toBe(true);
  expect(palindrome('ab')).toBe(false);
  expect(palindrome('aba')).toBe(true);
  expect(palindrome('abab')).toBe(false);
  expect(palindrome('abba')).toBe(true);
  expect(palindrome('kodok')).toBe(true);
  expect(palindrome('kasur rusak')).toBe(true);
});
