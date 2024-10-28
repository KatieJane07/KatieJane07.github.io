// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"


let x = 209;
let y = 100;
function setup() {
  createCanvas(400, 400);
  
}

function draw() {
  background(220);
  
  if (keyIsDown(39)===true){
    x +=2;
  }
  if (keyIsDown(38)===true){
    y -=2;
  }
  if (keyIsDown(37)===true){
    x -=2;
  }
  if (keyIsDown(40)===true){
    y +=2;
  }
  fill(124,223,197);
  rect(x,y,40);
  
}
