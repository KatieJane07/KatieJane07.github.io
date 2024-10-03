// Bouncing balls
// Katherine
// oct 3

let ballArray = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(124,43,111);
 
  for(let ball of ballArray){
    //move
    ball.x += ball.dx;
    ball.y += ball.dy;
  
    //boundaries
    if(ball.x>width-ball.rad || ball.x<0+ball.rad){
      ball.dx *= -1;
    }
  
    if(ball.y>height-ball.rad || ball.y<0+ball.rad){
      ball.dy *= -1;
    }
    //ball
    fill(ball.r,ball.g,ball.b);
    noStroke();
    circle(ball.x,ball.y,ball.rad*2);
  }
  
}

function SpawnBall(theX,theY) {
  let ball = {
    x:theX,
    y:theY,
    rad: random(30,60),
    dx:random(-5,5),
    dy:random(-5,5),
    r: random(255),
    g:random(255),
    b:random(255),
  };

  ballArray.push(ball);
}

function mousePressed(){
  SpawnBall(mouseX,mouseY);
}