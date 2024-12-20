class CustomAnimal {
  name: string;
  species: string;

  constructor(name: string, species: string) {
    this.name = name;
    this.species = species;
  }

  sound() {
    console.log('The animal makes a sound');
  }
}

class CustomDog extends CustomAnimal {
  breed: string;

  constructor(name: string, species: string, breed: string) {
    super(name, species);
    this.breed = breed;
  }

  sound() {
    console.log('The dog barks');
  }
}

const dog = new CustomDog('Buddy', 'Dog', 'Golden Retriever');
console.log(dog.name); // 'Buddy'
console.log(dog.species); // 'Dog'
console.log(dog.breed); // 'Golden Retriever'
dog.sound(); // 'The dog barks'

class Library {
  static totalBooks = 0;

  addBook() {
    Library.totalBooks++;
  }
}
const library = new Library();
library.addBook();
library.addBook();
console.log(Library.totalBooks);

class Vehicle {
  make: string;
  model: string;

  constructor(make: string, model: string) {
    this.make = make;
    this.model = model;
  }
}

class Motorcycle extends Vehicle {
  type: string;

  constructor(make: string, model: string, type: string) {
    super(make, model);
    this.type = type;
  }
}

const motorcycle = new Motorcycle('Honda', 'CBR', 'Sport');
console.log(motorcycle.make); // 'Honda'
console.log(motorcycle.model); // 'CBR'
console.log(motorcycle.type); // 'Sport'
