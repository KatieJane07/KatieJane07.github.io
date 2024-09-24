// Traffic Light Starter Code
// Your Name Here
// The Date Here

// GOAL: make a 'traffic light' simulator. For now, just have the light
// changing according to time. You may want to investigate the millis()
// function at https://p5js.org/reference/#/p5/millis
let state;
let red;
let orange;
let green;
let lastswitch = 0;
let sometime = 2000;
function setup() {
  createCanvas(600, 600);
  state = 1
}

function draw() {
  background(123,234,254);
  drawOutlineOfLights();

  //red
  if (state === 1){
    if (millis()>lastswitch+2000){
      state = 3
      console.log (state)
      lastswitch = millis() 
  }
}

  //orange
  if (state === 2){
    if (millis()>lastswitch+1000){
      state = 1
      console.log (state)
      lastswitch = millis()
  }
}

  //green
  if (state === 3){
    if (millis()>lastswitch+3000){
      state = 2
      console.log (state)
      lastswitch = millis()
  }
}
}

function drawOutlineOfLights() {
  //box
  if (state === 1){
    red = "red"
    orange = "white"
    green = "white"
  }
  if (state === 2){
    red = "white"
    orange = "orange"
    green = "white"
  }
  if (state === 3){
    red = "white"
    orange = "white"
    green = "green"
  }
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);
  
  //lights
  fill(red);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  fill(orange)
  ellipse(width/2, height/2, 50, 50); //middle
  fill(green)
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}