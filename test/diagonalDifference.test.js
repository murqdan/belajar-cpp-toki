import { diagonalDifference } from '../src/diagonalDifference';

test('test diagonalDifference function', () => {
  expect(
    diagonalDifference([
      [6, 8],
      [-6, 9],
    ])
  ).toBe(13);
  expect(
    diagonalDifference([
      [11, 2, 4],
      [4, 5, 6],
      [10, 8, -12],
    ])
  ).toBe(15);
});
