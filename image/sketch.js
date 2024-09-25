//image demo
// spet 24 24

let sb;

function preload(){
  sb = loadImage("Bob.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  image(sb, mouseX, mouseY);
}
