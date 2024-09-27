
// Int Scene red light green light
// Katie Strawson
// Oct 1
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let x=0;
let y=0;
let sqr=100;
let state=1;
let speed = 10;
let light;
let RedLight;
let GreenLight;
let lastswitch = 0;
let time= 5000;


function setup() {
  createCanvas(500, 500);
  light = 1;
}

function draw() {
  background(123,234,254);
  drawOutlineOfLights();
  squaremove();
  //green
  if (light === 2){
    if (millis()>lastswitch+time){
      light = 1;
      lastswitch = millis();
      time = random(200,6000);
    }
  }
  //red
  if (light === 1){
    if (millis()>lastswitch+time){
      light = 2;
      lastswitch = millis() ;
      time = random(200,5000);
    }
  }
}

function drawOutlineOfLights() {
  //box
  if (light === 1){
    RedLight = "red";
    GreenLight = "white";
  }
  if (light === 2){
    RedLight = "white";
    GreenLight = "green";
  }
 
  rectMode(CENTER);
  fill(0);

  //lights
  fill(RedLight);
  ellipse(width/2, height/2 - 65, 50, 50); //top

  fill(GreenLight);
  ellipse(width/2, height/2 + 65, 50, 50); //bottom
}

function squaremove(){
  fill(235,81,94);
  rect(x,y,sqr,sqr);
  if (state === 1){
    x+=speed;
    if (x===width-sqr){
      state = 2;
    }
  }
    
  if (state === 2){
    y+=speed;
    if (y===height-sqr){
      state = 3;
    }
  }
  
  if (state===3){
    x-=speed;
    if (x===0){
      state = 4;
    }
  }
  
  if (state===4){
    y-=speed;
    if (y===0){
      state = 1;
    }
  }
  

}
