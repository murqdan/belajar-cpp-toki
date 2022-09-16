import { plusMinus } from '../src/plusMinus.js';

test('test plusMinus function', () => {
  const result = plusMinus([-4, 3, -9, 0, 4, 1]);

  expect(result).toEqual({
    result1: 0.5,
    result2: 0.3333333333333333,
    result3: 0.16666666666666666,
  });
});
