// Fly swatter
//Katie


let circleX;
let circleY;
let time = 1;
let flies = [];
let killable;
let circles = true;
let triangles = false;

function setup() {
  createCanvas(windowWidth, windowHeight);
  circleX = width/2;
  circleY = height/2;
}

function draw() {
  background(144,253,211);

  circleX = noise(time) * width;
  circleY = noise(time + 3) * height;
  time+=0.005;

  if (circles === true){
    circle(circleX,circleY, 50, killable = true);
  }

  if (mouseIsPressed && (mouseY <= circleY + 50 && mouseY >= circleY - 50) && (mouseX <= circleX + 50 && mouseX >= circleX - 50) ) {
    if (killable === true){
      dead();
    }
  }
}

function dead(){
  triangles = true;
  if (triangles === true){
    triangle(circleX, circleY+50,circleX-50, circleY-50, circleX+50,circleY-50);
  }
  circles = false;
}