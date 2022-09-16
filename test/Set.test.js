import { Set } from '../src/Set';

test('test add', () => {
  const createSet = Set();

  expect(createSet.add(1)).toBe(true);
  expect(createSet.add(1)).toBe(false);
  expect(createSet.add('a')).toBe(true);
  expect(createSet.add('a')).toBe(false);
});

test('test contains', () => {
  const createSet = Set();

  createSet.add(1);
  createSet.add(2);

  expect(createSet.contains(1)).toBe(true);
  expect(createSet.contains(2)).toBe(true);

  expect(createSet.contains(3)).toBe(false);
});

test('test size', () => {
  const createSet = Set();

  expect(createSet.size()).toBe(0);

  createSet.add('A');
  expect(createSet.size()).toBe(1);

  createSet.add('A');
  expect(createSet.size()).toBe(1);

  createSet.add('B');
  expect(createSet.size()).toBe(2);
});

test('test remove', () => {
  const createSet = Set();

  createSet.add('A');
  createSet.add('B');
  createSet.add('C');
  createSet.add('D');
  createSet.add('E');
  createSet.add('F');
  expect(createSet.size()).toBe(6);

  createSet.remove('D');
  expect(createSet.size()).toBe(5);

  createSet.remove('A');
  expect(createSet.size()).toBe(4);

  createSet.remove('E');
  expect(createSet.size()).toBe(3);
});
