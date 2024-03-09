interface Walkable {
  walk(): void;
}

interface Flyable {
  fly(): void;
}

class Dog implements Walkable {
  walk() {
    // Move in 2d space
  }
}

class Crow implements Flyable {
  fly() {
    // Move in 3d space
  }
}

// @ts-ignore
const dog = new Dog();
// @ts-ignore
const crow = new Crow();
