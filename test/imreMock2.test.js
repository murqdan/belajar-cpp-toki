import { isParentheses } from '../src/imreMock2';

test('test isParentheses function', () => {
    expect(isParentheses('')).toBe(true);
    expect(isParentheses('{')).toBe(false);
    expect(isParentheses('{}')).toBe(true);
    expect(isParentheses('[(])')).toBe(false);
    expect(isParentheses('[()]')).toBe(true);
    expect(isParentheses('{}()[]')).toBe(true);
    expect(isParentheses('{[{}()]}')).toBe(true);
    expect(isParentheses('[[[}')).toBe(false);
    expect(isParentheses(']]])))')).toBe(false);
});
