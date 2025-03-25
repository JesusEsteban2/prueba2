import { fizzbuzz, fizzbuzzItem } from './fizzbuzz';

describe('with fizzbuzz', () => {
    test('If 2 ==> 2', () => {
        expect(fizzbuzzItem(2)).toEqual(2);
    });

    test('If n % 3 = 0 ==> Fizz', () => {
        expect(fizzbuzzItem(3)).toEqual('fizz');
    });

    test('If n % 5 = 0 ==> Buzz', () => {
        expect(fizzbuzzItem(5)).toEqual('buzz');
    });

    test('If n % 15 = 0 ==> Fizz', () => {
        expect(fizzbuzzItem(15)).toEqual('fizzbuzz');
    });

    test('If n % 30 = 0 ==> Buzz', () => {
        expect(fizzbuzzItem(30)).toEqual('fizzbuzz');
    });

    test('if fizzbuzz(1, 5))', () => {
        expect(fizzbuzz(1, 5)).toEqual([1, 2, 'fizz', 4, 'buzz']);
    });
});
