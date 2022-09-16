import { bigSum } from '../src/bigSum';

test('test bigSum function', () => {
  const result = bigSum([
    1000000001, 1000000002, 1000000003, 1000000004, 1000000005,
  ]);

  expect(result).toBe(5000000015);
});
