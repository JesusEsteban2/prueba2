export const fizzbuzzItem = (n: number) => {
    if (n % 15 === 0) return 'fizzbuzz';

    if (n % 3 === 0) return 'fizz';

    if (n % 5 === 0) return 'buzz';
    return n;
};

export const fizzbuzz = (start: number, end: number) => {
    const array = [];
    for (let i = start; i <= end; i++) {
        array.push(fizzbuzzItem(i));
    }
    return array;
};
