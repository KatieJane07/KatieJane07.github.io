// Perlin Noise Ball
//Kathrine
// Oct 7

let x;
let y;
let time = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  x = width/2;
  y = height/2;
}

function draw() {
  background(124,53,144);

  x = noise(time) * width;
  y = noise(time + 3) * height;
  time+=0.01;

  circle(x,y, 50);

}
