import { omit } from './index';

describe('nodash.omit', () => {
  test('removes targeted keys', () => {
    const object = { a: 1, b: 2, c: 3, d: 4 };
    expect(omit('a')(object)).toEqual({ b: 2, c: 3, d: 4 });
    expect(omit('b')(object)).toEqual({ a: 1, c: 3, d: 4 });
    expect(omit('c')(object)).toEqual({ a: 1, b: 2, d: 4 });
    expect(omit('d')(object)).toEqual({ a: 1, b: 2, c: 3 });
  });
  test('can remove multiple keys', () => {
    const object = { a: 1, b: 2, c: 3, d: 4 };
    expect(omit('a', 'b')(object)).toEqual({ c: 3, d: 4 });
    expect(omit('b', 'c')(object)).toEqual({ a: 1, d: 4 });
    expect(omit('c', 'd')(object)).toEqual({ a: 1, b: 2 });
    expect(omit('d', 'a')(object)).toEqual({ b: 2, c: 3 });
  });
  test('should coerce paths to strings', () => {
    const testObject = { 0: 'a', b: 2 };
    expect(omit(0)(testObject)).toEqual({ b: 2 });
  });
  test.each([null, undefined])('should return an empty object when input object is nullish (testing %p)', object => {
    expect(omit('a')(object)).toEqual({});
  });
  test('should not mutate input object', () => {
    const object = { a: 1, b: 2, c: 3 };
    const testArray = [['a', 'b', 'c'], ['b', 'c', 'a']];
    testArray.forEach((path) => {
      omit(...path)(object);
      expect(object).toBe(object);
      expect(object).toEqual({ a: 1, b: 2, c: 3 });
    });
  });
});
