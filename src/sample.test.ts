import { add } from './sample';

describe('test for add', () => {
    test('If 2 + 3 =5', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('If -2 + -3=-5', () => {
        expect(add(-2, -3)).toBe(-5);
    });
});
