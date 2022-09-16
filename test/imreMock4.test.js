import { reverseNum } from '../src/imreMock4';

test('test reverseNum function', () => {
  expect(reverseNum(1)).toBe(1);
  expect(reverseNum(12)).toBe(21);
  expect(reverseNum(120)).toBe(21);
  expect(reverseNum(123)).toBe(321);
  // expect(reverseNum(0123)).toBe(321);
  expect(reverseNum(1234)).toBe(4321);
  expect(reverseNum(12345)).toBe(54321);
  expect(reverseNum(273423892)).toBe(298324372);

  expect(reverseNum(-1)).toBe(-1);
  expect(reverseNum(-12)).toBe(-21);
  expect(reverseNum(-120)).toBe(-21);
  expect(reverseNum(-123)).toBe(-321);
  expect(reverseNum(-1234)).toBe(-4321);
  expect(reverseNum(-12345)).toBe(-54321);
  expect(reverseNum(-273423892)).toBe(-298324372);
});
