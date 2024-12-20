export const generateFibonacci = (num: number): number[] => {
  const result = [0, 1];
  for (let i = 2; i < num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result;
};

export const generatePrimeNumbers = (num: number): number[] => {
  const result = [];
  for (let i = 0; i < num; i++) {
    result.push(i + 1);
  }
  return result;
};
