const sumEvenNumbers = (arr: number[]): number =>
  arr.filter((num) => num % 2 === 0).reduce((acc, num) => acc + num, 0);

interface StringToBooleanFunction {
  (str: string): boolean;
}
const isEmptyString: StringToBooleanFunction = (str) => str === '';

type CompareStrings = (str1: string, str2: string) => boolean;
const compareStrings: CompareStrings = (str1, str2) => str1 === str2;

const getLastElement = <T>(arr: T[]): T => arr[arr.length - 1];

const makeTriple = <T>(a: T, b: T, c: T): [T, T, T] => [a, b, c];
