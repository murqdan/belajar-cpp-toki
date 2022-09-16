import { dzuizzImreInterview } from '../src/imreMock8';

/* test('test dzuizzImreInterview function', () => {
  dzuizzImreInterview(12);
}); */

test('test dzuizzImreInterview function', () => {
  expect(dzuizzImreInterview([9])).toBe(10);
  expect(dzuizzImreInterview([8,9])).toBe(90);
  expect(dzuizzImreInterview([1,2,3])).toBe(124);
  expect(dzuizzImreInterview([9,9,9,9])).toBe(10000);
});
