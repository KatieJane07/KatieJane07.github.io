// Fly swatter
//Katie


let circleX;
let circleY;
let time = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleX = width/2;
  circleY = height/2;
}

function draw() {
  background(144,253,211);

  circleX = noise(time) * width;
  circleY = noise(time + 3) * height;
  time+=0.01;

  circle(circleX,circleY, 50);

  if (mouseIsPressed && (mouseY <= circleY + 50 || mouseY >= circleY - 50) && (mouseX <= circleX + 50 || mouseX >= circleX - 50) ) {
    circle(100,100,100);
  }
}