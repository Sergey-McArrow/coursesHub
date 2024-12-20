interface Person {
  name: string;
  age: number;
  city: string;
}

const greetUser = (name: string) => {
  console.log(`Привет, ${name}!`);
};

greetUser('Max');

const printPersonInfo = (person: Person) => {
  console.log(
    `Имя: ${person.name}, Возраст: ${person.age}, Город: ${person.city}`
  );
};

const printperson: Person = { name: 'Max', age: 25, city: 'New York' };
printPersonInfo(printperson);

const squareNumber = (num: number): number => {
  return num * num;
};

const isEven = (num: number): boolean => {
  return num % 2 === 0;
};

interface Student {
  name: string;
  grade: number;
}

const printStudentInfo = (student: Student) => {
  console.log(`Студент: ${student.name}, Оценка: ${student.grade}`);
};

const student: Student = {
  name: 'Max',
  grade: 85,
};
printStudentInfo(student);

const logMessage = (message: string): void => {
  console.log(message);
};

logMessage('Hello, world!');
