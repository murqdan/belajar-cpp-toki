import { gradingStudents } from '../src/gradingStudents';

test('test gradingStudents function', () => {
  expect(gradingStudents([73, 67, 38, 33])).toEqual([75, 67, 40, 33]);
});
