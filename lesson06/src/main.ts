// basic class
class Car {
  brand: string;
  model: string;
  year: number;
  constructor(brand: string, model: string, year: number) {
    this.brand = brand;
    this.model = model;
    this.year = year;
  }
}

// visibility modifiers (access modifiers) allows us to declare properties in the constructor
class Point {
  constructor(public x: number, public y: number) {
    this.x = x;
    this.y = y;
  }
}
