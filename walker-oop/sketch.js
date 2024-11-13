// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

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

let winston;
let joti;

function setup() {
  createCanvas(windowWidth, windowHeight);
  winston = new Walker(windowWidth/2, windowHeight/2, "pink");
  joti = new Walker(width/2,height/2,"magenta");
}


function draw() {
  winston.move();
  joti.move();
  winston.display();
  joti.display();
}
