abstract class Animal {
  abstract move(): void;
}

class Mammal extends Animal {
  move() {
    // Move in 2d space
  }
}

class Ave extends Animal {
  move() {
    // Move in 3d space
  }
}

class Dog extends Mammal {}

class Crow extends Ave {}

// @ts-ignore
const dog = new Dog();
// @ts-ignore
const crow = new Crow();
