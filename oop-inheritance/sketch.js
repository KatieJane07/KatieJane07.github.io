// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

//parent class
class Shape {
  constructor(x, y, color) {
    this.x = x;
    this.y = y;
    this.color = color;
  }

  //common display for all shapes
  display() {
    noStroke();
    fill(this.color);
  }

  move() {
    this.x += random(-2, 2);
    this.y += random(-3,3);
  }
}

//child class
class Circle extends Shape { 
  constructor(x, y, color, radius) {
    super(x, y, color);
    this.radius = radius;
  }

  display() {
    super.display();
    circle(this.x, this.y, this.radius*2);
  }
}

class Square extends Shape {
  constructor(x, y, color, size) {
    super(x, y, color);
    this.size = size;
  }

  display() {
    super.display();
    square(this.x, this.y, this.size);
  }
}

let theShapes = [];

function setup() {
  createCanvas(windowWidth, windowHeight);

  for (let i = 0; i < 10; i++) {
    if (random(100) < 50) {
      let someCircle = new Circle(random(width), random(height), color(random(255), random(255), random(255)), random(50));
      theShapes.push(someCircle);
    }
    else {
      let someSquare = new Square (random(width), random(height), color(random(255), random(255), random(255)), random(50));
      theShapes.push(someSquare);
    }
  }
}

function draw() {
  background(213,212,111);

  for (let shape of theShapes) {
    shape.move();
    shape.display();
  }
}
