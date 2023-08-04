import { filterEvenNumbers, filterLengthWith4, filterStartWithA } from '../src/filter';

describe('filterEvenNumbers', () => {
    test('filters even numbers', () => {
        const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        const evenNumbers = [2, 4, 6, 8, 10];
        const result = filterEvenNumbers(numbers);

        expect(result).toEqual(evenNumbers);
    })

    test('returns an empty array if no even numbers can be found', () => {
        const numbers = [1, 3, 5, 7, 9];
        const result = filterEvenNumbers(numbers);

        expect(result).toEqual([]);
    })
});

describe('filterLengthWith4', () => {
    test('filters words with length of 4', () => {
        const words = ['moon', 'happy', 'smile', 'cake', 'rainbow', 'tree'];
        const expectedValues = ['moon', 'cake', 'tree'];
        const result = filterLengthWith4(words);

        expect(result).toEqual(expectedValues);
    })

    test('returns an empty array if no words with length of 4 can be found', () => {
        const words = ['happy', 'smile', 'rainbow'];
        const result = filterLengthWith4(words);

        expect(result).toEqual([]);
    })
});

describe('filterStartWithA', () => {
    test('filters words that starts with A', () => {
        const words = ['angelic', 'adorable', 'smile', 'cake', 'achieve', 'tree'];
        const wordsStartWithA = ['angelic', 'adorable', 'achieve'];
        const result = filterStartWithA(words);

        expect(result).toEqual(wordsStartWithA);
    })

    test('returns an empty array if no words with length of 4 can be found', () => {
        const words = ['smile', 'cake', 'rainbow'];
        const result = filterStartWithA(words);

        expect(result).toEqual([]);
    })
});