export function countWords(sentence: string) {
    if (typeof sentence !== 'string') return;
    if (sentence === '') return 0;
    const words = sentence.split(' ');
    return words.filter((word) => word !== '').length;
}
