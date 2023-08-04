import { addSerialNumber, halfNumbers, spliceNames } from "../src/map";

describe("halfNumbers", () => {
  test('returns the half value of a number', () => {
    const values = [10, 20, 30, 40, 50, 60];
    const expectedValues = [5, 10, 15, 20, 25, 30];
    const result = halfNumbers(values);

    expect(result).toEqual(expectedValues);
  })
});

describe("spliceNames", () => {
  test('adds Hello before each name', () => {
    const names = ['Zariyah', 'Soleil', 'Astherielle'];
    const expectedValues = ['Hello Zariyah', 'Hello Soleil', 'Hello Astherielle'];
    const result = spliceNames(names);

    expect(result).toEqual(expectedValues);
  })
});

describe("addSerialNumber", () => {
  test('adds serial number before each name', () => {
    const names = ['Zariyah', 'Soleil', 'Astherielle'];
    const expectedValues = ['1. Zariyah', '2. Soleil', '3. Astherielle'];
    const result = addSerialNumber(names);

    expect(result).toEqual(expectedValues);
  })
});