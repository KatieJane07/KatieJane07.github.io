// 
//Katie
//idea: different cricles of different colours, some go faster, 
//to get points hold on to the circle, different colours
//have different speeds

let targets = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for(let i = 0; i < 8; i++){
    spawnTarget();
  }

}

function draw() {
  background(124,53,144);
  moveTargets();
  displayTarget();

}


function spawnTarget(){
  let someTarget = {
    x: width/2,
    y: height/2,
    timeX:random(100000000),
    timeY:random(100000000),
    deltaTime: 0.002,
    pointsRating: 0,

  };

  let choice = random(100);
  if (choice < 30) {
    someTarget.colour = "red";
    someTarget.radius = 30;
    someTarget.deltaTime = 0.009;
    someTarget.pointsRating = 10;
  }
  else{
    someTarget.colour = "blue";
    someTarget.radius = 10;
    someTarget.deltaTime = 0.002;
    someTarget.pointsRating = 10;
  }

  targets.push(someTarget);

}

function moveTargets(){
  for (let target of targets) {
    let x = noise(target.timeX)*width;
    let y = noise(target.timeY)*height;
    target.x = x;
    target.y = y;

    target.timeX += target.deltaTime;
    target.timeY += target.deltaTime;
  }

}

function displayTarget(){
  for( let target of targets){
    fill(target.colour);
    circle(target.x, target.y, target.radius*2);
  }
}