export function countWords(sentence: string) {
    if (typeof sentence !== 'string') return;
    if (sentence === '') return 0;
    const words = sentence.split(' ');
    return words.filter((word) => word !== '').length;
}

export function atPractique() {
    const array1 = [5, 12, 8, 130, 44];

    let index = 2;

    console.log(`An index of ${index} returns ${array1.at(index)}`);
    // Expected output: "An index of 2 returns 8"

    index = -2;

    console.log(`An index of ${index} returns ${array1.at(index)}`);
    // Expected output: "An index of -2 returns 130"
}

atPractique();
