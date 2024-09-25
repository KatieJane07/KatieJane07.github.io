<<<<<<< HEAD
// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}
=======
// Traffic Light Starter Code
// Katie Strawson
// Sept 24

// GOAL: make a 'traffic light' simulator. 

let state;
let pink;
let orange;
let go;
let lastswitch = 0;

function setup() {
  createCanvas(600, 600);
  state = 1;
}

function draw() {
  background(123,234,254);
  drawOutlineOfLights();

  //red
  if (state === 1){
    if (millis()>lastswitch+1000){
      state = 3;
      console.log (state);
      lastswitch = millis() ;
    }
  }

  //orange
  if (state === 2){
    if (millis()>lastswitch+500){
      state = 1;
      console.log (state);
      lastswitch = millis();
    }
  }

  //green
  if (state === 3){
    if (millis()>lastswitch+1500){
      state = 2;
      console.log (state);
      lastswitch = millis();
    }
  }
}

function drawOutlineOfLights() {
  //box
  if (state === 1){
    pink = "red";
    orange = "white";
    go = "white";
  }
  if (state === 2){
    pink = "white";
    orange = "orange";
    go = "white";
  }
  if (state === 3){
    pink = "white";
    orange = "white";
    go = "green";
  }
  rectMode(CENTER);
  fill(0);
  rect(width/2, height/2, 75, 200, 10);
  
  //lights
  fill(pink);
  ellipse(width/2, height/2 - 65, 50, 50); //top
  fill(orange);
  ellipse(width/2, height/2, 50, 50); //middle
  fill(go);
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}
>>>>>>> 57d598a8a072638fd87f376919382bb5b06ad29e
