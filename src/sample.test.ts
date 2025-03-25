import { add } from './sample';

describe('test for add', () => {
    test('If 2 + 3 =5', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('If -2 + -3=-5', () => {
        const num1 = -2;
        const num2 = -3;
        const result = add(num1, num2);
        const expected = -5;
        expect(result).toBe(expected);
    });
});
