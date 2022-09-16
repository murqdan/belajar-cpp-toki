import { selisihTerkecil } from '../src/selisihTerkecil';

test('test selisihTerkecil function', () => {
  expect(selisihTerkecil([5], [3])).toEqual([5, 3]);
  expect(selisihTerkecil([-1], [-2])).toEqual([-1, -2]);
  expect(selisihTerkecil([-1,1], [-2,1])).toEqual([1, 1]);
  expect(selisihTerkecil([-1, 19, 15, 6, 5], [30, 17, 10, 12, -6])).toEqual([19, 17]);
  expect(selisihTerkecil([2, -1, 19, 15, 6, 5], [30, 3, 17, 10, 12, -6])).toEqual([2,3]);
});
