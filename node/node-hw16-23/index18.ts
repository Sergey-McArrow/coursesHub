type Admin = {
  name: string;
  permissions: string[];
};

type User = {
  name: string;
  email: string;
};

type AdminUser = Admin & User;

type Car = {
  make: string;
  model: string;
  year?: number;
  engine: {
    type: string;
    horsepower: number;
  };
};

const car: Car = {
  make: 'Toyota',
  model: 'Camry',
  year: 2022,
  engine: {
    type: 'Gasoline',
    horsepower: 200,
  },
};

const carInfo = (car: Car): void => {
  console.log(`Make: ${car.make}`);
  console.log(`Model: ${car.model}`);
  console.log(`Engine Type: ${car.engine.type}`);
  console.log(`Horsepower: ${car.engine.horsepower}`);
};

carInfo(car);

interface Product {
  name: string;
  price: number;
}

const calculateDiscount = (product: Product, discount: number): number =>
  product.price * (1 - discount / 100);

interface Employee {
  name: string;
  salary: number;
}
const employees: Employee[] = [
  { name: 'John Doe', salary: 5000 },
  { name: 'Jane Doe', salary: 6000 },
  { name: 'Bob Smith', salary: 7000 },
];

const getSalaries = (employees: Employee[]): number[] =>
  employees.map((employee) => employee.salary);

interface Person {
  firstName: string;
  lastName: string;
}
interface Student extends Person {
  grade: number;
}

const student: Student = {
  firstName: 'John',
  lastName: 'Doe',
  grade: 85,
};
const printStudentInfo = (student: Student): void => {
  console.log(
    `${student.firstName} ${student.lastName}, Grade: ${student.grade}`
  );
};

interface ConcatStrings {
  (str1: string, str2: string): string;
}

const concatStrings: ConcatStrings = (str1: string, str2: string): string =>
  str1 + str2;
