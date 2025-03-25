import { countWords } from './tool';

describe('With countWords', () => {
    test('If is empty', () => {
        expect(countWords('')).toEqual(0);
    });

    test('If text is "Uno dos tres"', () => {
        expect(countWords('Uno dos tres')).toEqual(3);
    });
});
