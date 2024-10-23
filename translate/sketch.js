// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
  angleMode(DEGREES);
  rectMode(CENTER);
}

function draw() {
  background(220);

  translate(225,225);
  push();
  rotate(mouseX);
  fill(144,123,245);
  square(0,0,100);

  pop();
  fill(132,254,142);
  rect(width/2,400,width*2,400);
}
