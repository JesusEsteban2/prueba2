import { countWords, atPractique } from './tool';

describe('Given countWords', () => {
    test('It is empty', () => {
        expect(countWords('')).toEqual(0);
    });

    test('It text is "Uno dos tres"', () => {
        expect(countWords('Uno dos tres')).toEqual(3);
    });
});

describe('Given atPractique', () => {
    test('Then it is called', () => {
        expect(atPractique());
    });
});
