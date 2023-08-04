import { firstGrownUp, firstOrange, firstLengthOver5Name } from "../src/find";

describe('firstGrownUp', () => {
  test('finds the first grown up age', () => {
    const ages = [11, 22, 8, 16, 24];
    const expectedValue = 22;
    const result = firstGrownUp(ages);

    expect(result).toBe(expectedValue);
  })
});

describe('firstOrange', () => {
  test('finds the first occurrence of orange', () => {
    const fruits = ['apple', 'banana', 'strawberry', 'orange', 'pineapple'];
    const expectedValue = 'orange';
    const result = firstOrange(fruits);

    expect(result).toBe(expectedValue);
  })
});

describe('firstLengthOver5Name', () => {
  test('finds the first occurence of name with length over 5', () => {
    const names = ['Miryam', 'Zyra', 'Arianne', 'Arlly', 'Joyce'];
    const expectedValue = 'Miryam';
    const result = firstLengthOver5Name(names);

    expect(result).toBe(expectedValue);
  })
});