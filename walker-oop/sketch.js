//walker oop

class Walker {
  constructor(x,y,colour) {
    this.x = x;
    this.y = y;
    this.speed = 30;
    this.radius = 15;
    this.colour = colour;
  }

  display() {
    fill(this.colour);
    noStroke();
    circle(this.x, this.y, this.radius*2);
  }

  move() {
    let choice = random(100);
    if (choice < 25) {
      //up
      this.y -= this.speed;
    }
    else if (choice < 50) {
      //down
      this.y += this.speed;
    }
    else if (choice < 75) {
      //left
      this.x -= this.speed;
    }
    else {
      //right
      this.x += this.speed;
    }
  }
}

let walkerArray =[];

function setup() {
  createCanvas(windowWidth, windowHeight);
}


function draw() {
  for (let theWalker of walkerArray) {
    theWalker.move();
    theWalker.display();
  }
}

function mousePressed() {
  let randomColour = color(random(255),random(255),random(255));

  let someWalker = new Walker(mouseX, mouseY, randomColour);
  walkerArray.push(someWalker);
}