import {
  factorial,
  factorialRecursive,
  factorialTailRecursive,
} from '../src/factorial';

test('test factorial function', () => {
  expect(factorial(-1)).toBe(1);
  expect(factorial(0)).toBe(1);
  expect(factorial(1)).toBe(1);
  expect(factorial(4)).toBe(24);
  expect(factorial(5)).toBe(120);
  expect(factorial(8)).toBe(40320);
  expect(factorial(11)).toBe(39916800);
});

test('test factorialRecursive function', () => {
  expect(factorialRecursive(-1)).toBe(1);
  expect(factorialRecursive(0)).toBe(1);
  expect(factorialRecursive(1)).toBe(1);
  expect(factorialRecursive(4)).toBe(24);
  expect(factorialRecursive(5)).toBe(120);
  expect(factorialRecursive(8)).toBe(40320);
  expect(factorialRecursive(11)).toBe(39916800);
});

test('test factorialTailRecursive function', () => {
  expect(factorialTailRecursive(-1)).toBe(1);
  expect(factorialTailRecursive(0)).toBe(1);
  expect(factorialTailRecursive(1)).toBe(1);
  expect(factorialTailRecursive(4)).toBe(24);
  expect(factorialTailRecursive(5)).toBe(120);
  expect(factorialTailRecursive(8)).toBe(40320);
  expect(factorialTailRecursive(11)).toBe(39916800);
});
