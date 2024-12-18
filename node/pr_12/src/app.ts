interface TCar {
  brand: string;
  model: string;
  year: number;
  isElectric: boolean;
}

const audi: TCar = {
  brand: "Audi",
  model: "A4",
  year: 2024,
  isElectric: true,
};

const describeCar = (car: TCar) => {
  return `Brand: ${car.brand}, Model: ${car.model}, Year: ${car.year}, Electric: ${car.isElectric} `;
};

console.log(describeCar(audi));

const scores = [1, 12, 36, 2, 756];

const averageScore = (arr: number[]): number => {
  if (!arr.length) return -1;
  const avg = arr.reduce((cur, acc) => cur + acc, 0);
  return Math.floor(avg / arr.length);
};

console.log(averageScore(scores));
console.log(averageScore([]));

interface IConfig {
  name: string;
  type: string;
}

const val = "some string" as unknown as number;

interface IExtendedConfig extends IConfig {
  [key: string]: unknown;
}

const config: IExtendedConfig = {
  name: "Config",
  type: "Main",
  version: "1.02",
};

type TPerson = [string, number];

const person: TPerson = ["John", 25];
