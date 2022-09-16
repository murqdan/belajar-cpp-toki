import { imreMockSatu } from '../src/imreMock1';

/* test('test imreMockSatu function', () => {
  expect(imreMockSatu([2, 7, 11, 15], 9)).toEqual([2, 7]);
  expect(imreMockSatu([3, 2, 4], 6)).toEqual([2, 4]);
  expect(imreMockSatu([3, 2, 3], 6)).toEqual([3, 3]);
  expect(imreMockSatu([3, 3], 6)).toEqual([3, 3]);
}); */

test('test imreMockSatu function', () => {
  expect(imreMockSatu([2, 7, 11, 15], 9)).toEqual([0, 1]);
  expect(imreMockSatu([3, 2, 4], 6)).toEqual([1, 2]);
  expect(imreMockSatu([3, 2, 3], 6)).toEqual([0, 2]);
  expect(imreMockSatu([3, 3], 6)).toEqual([0, 1]);
});

/* test('test dzuizzImreInterview function', () => {
    imreMockSatu(12);
}); */
