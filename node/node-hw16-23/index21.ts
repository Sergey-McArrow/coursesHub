abstract class Animal {
  abstract makeSound(): void;
}

class Dog extends Animal {
  makeSound(): void {
    console.log('Bark');
  }
}

class Cat extends Animal {
  makeSound(): void {
    console.log('Meow');
  }
}

const animals: Animal[] = [new Dog(), new Cat()];
animals.forEach((animal) => animal.makeSound());

abstract class Shape {
  abstract calculateArea(): number;
}

abstract class ColoredShape extends Shape {
  abstract color: string;
}

class ColoredCircle extends ColoredShape {
  constructor(public radius: number, public color: string) {
    super();
  }
  calculateArea(): number {
    return Math.PI * this.radius * this.radius;
  }
}

class ColoredRectangle extends ColoredShape {
  constructor(
    public width: number,
    public height: number,
    public color: string
  ) {
    super();
  }
  calculateArea(): number {
    return this.width * this.height;
  }
}

const coloredShapes: ColoredShape[] = [
  new ColoredCircle(5, 'red'),
  new ColoredRectangle(3, 4, 'green'),
];

coloredShapes.forEach((shape) => {
  console.log(`Area: ${shape.calculateArea()}, Color: ${shape.color}`);
});

abstract class Appliance {
  abstract turnOn(): void;
  abstract turnOff(): void;
}

class WashingMachine extends Appliance {
  turnOn(): void {
    console.log('Washing machine turned on');
  }
  turnOff(): void {
    console.log('Washing machine turned off');
  }
}

class Refrigerator extends Appliance {
  turnOn(): void {
    console.log('Refrigerator turned on');
  }
  turnOff(): void {
    console.log('Refrigerator turned off');
  }
}

const appliances: Appliance[] = [new WashingMachine(), new Refrigerator()];

appliances.forEach((appliance) => {
  appliance.turnOn();
  appliance.turnOff();
});

abstract class Account {
  abstract deposit(amount: number): void;
  abstract withdraw(amount: number): void;
}

class SavingsAccount extends Account {
  balance: number = 0;
  deposit(amount: number): void {
    this.balance += amount;
  }
  withdraw(amount: number): void {
    this.balance -= amount;
  }
  addPercents(): void {
    this.balance += this.balance * 0.01;
  }
}

class CheckingAccount extends Account {
  balance: number = 0;
  deposit(amount: number): void {
    this.balance += amount;
  }
  withdraw(amount: number): void {
    this.balance -= amount + 0.1;
  }
  addPercents(): void {
    this.balance += this.balance * 0.01;
  }
}
// Проверьте работу методов на объектах обоих классов.

const savingsAccount = new SavingsAccount();
savingsAccount.deposit(1000);
savingsAccount.withdraw(500);
savingsAccount.addPercents();
console.log(savingsAccount.balance);

const checkingAccount = new CheckingAccount();
checkingAccount.deposit(1000);
checkingAccount.withdraw(500);
checkingAccount.addPercents();
console.log(checkingAccount.balance);

abstract class Media {
  abstract play(): void;
}

class AudioMedia extends Media {
  play(): void {
    console.log('Playing audio');
  }
}

class VideoMedia extends Media {
  play(): void {
    console.log('Playing video');
  }
}

const media: Media[] = [new AudioMedia(), new VideoMedia()];
media.forEach((item) => item.play());
