import { fizzbuzz } from './fizzbuzz';

test('If 2 ==> 2', () => {
    expect(fizzbuzz(2)).toEqual(2);
});

test('If n % 3 = 0 ==> Fizz', () => {
    expect(fizzbuzz(3)).toEqual('fizz');
});

test('If n % 5 = 0 ==> Buzz', () => {
    expect(fizzbuzz(5)).toEqual('buzz');
});

test('If n % 15 = 0 ==> Fizz', () => {
    expect(fizzbuzz(15)).toEqual('fizzbuzz');
});

test('If n % 30 = 0 ==> Buzz', () => {
    expect(fizzbuzz(30)).toEqual('fizzbuzz');
});
