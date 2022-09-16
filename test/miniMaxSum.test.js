import { miniMaxSum } from '../src/miniMaxSum';

test('test miniMaxSum function', () => {
    const result = miniMaxSum([1,2,3,4,5])

    // expect(result).toEqual({min:10, max:14})

    expect(result).toEqual([10, 14])
})