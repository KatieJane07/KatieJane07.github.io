// 
//Katie
//idea: different cricles of different colours, some go faster, 
//to get points hold on to the circle, different colours
//have different speeds

let targetArray = [];
let points = 0;
let someTarget;
let r;
let g;
let b;
let state = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 8; i++){
    spawnTarget();
  }
  r = 235;
  g = 52;
  b = 52;
}

function draw() {
  changeBackground();   
  moveTargets();
  displayTarget();
  displayPoints(); 
}

function changeBackground(){
  if (keyIsPressed){
    if (state === 1){
      for (let i = 52; i<235; i++){
        g = i;
      }
      state = 2;
    }
    if ( state === 2){
      for (let i = 235; i>52; i--){
        r = i;
      }
      state = 3;
    }
    if (state === 3){
      for (let i = 52; i<235; i++){
        b = i;
      }
      state = 4;
    }
  }  
  background(r,g,b);
}
function displayPoints(){
  fill(0);
  strokeWeight(4);
  textSize(30);
  text(points, 100, 100);
}

function spawnTarget(){
  someTarget = {
    x: width/2,
    y: height/2,
    timeX:random(100000000),
    timeY:random(100000000),
    deltaTime: 0.002,

  };

  let choice = random(100);
  if (choice < 30) {
    someTarget.colour = "red";
    someTarget.radius = 30;
    someTarget.deltaTime = 0.001;
    someTarget.pointsRating = 100;
  }
  else{
    someTarget.colour = "blue";
    someTarget.radius = 10;
    someTarget.deltaTime = 0.002;
    someTarget.pointsRating = 5;
  }

  targetArray.push(someTarget);

}

function moveTargets(){
  for (let target of targetArray) {
    let x = noise(target.timeX)*width;
    let y = noise(target.timeY)*height;
    target.x = x;
    target.y = y;

    target.timeX += target.deltaTime;
    target.timeY += target.deltaTime;
  }

}

function displayTarget(){
  for( let target of targetArray){
    fill(target.colour);
    circle(target.x, target.y, target.radius*2);
  }
}

function mousePressed(){
  for(let target of targetArray){
    if (clickedInTarget(mouseX,mouseY,target)) {
      let theIndex = targetArray.indexOf(target);
      if (minute() === 14){
        if (target.colour === "red"){
          points += 5;
        }
        else{
          points += 10;
        }

      }
    }
  }
}

function clickedInTarget(x,y,theTarget){
  let distanceAway = dist(x, y,theTarget.x, theTarget.y);
  if (distanceAway < theTarget.radius){
    return true;
  }
  else{
    return false;
  }
}
