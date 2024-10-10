// bubble demo
//Kathrine

let theBubbles = [];
let death = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  for (let i = 0; i<5; i++){
    spawnbubbles();
  }
  noStroke();

  window.setInterval(spawnbubbles,50);
}

function draw() {
  background(143,233,253);
  //moveBubblesRandomly();
  moveBubblesNoise();
  displayBubbles();
  displayDeathSpots();
}

function mousePressed(){
  for(let bubble of theBubbles){
    if (clickedInBubble(mouseX,mouseY,bubble)) {
      let theIndex = theBubbles.indexOf(bubble);
      theBubbles.splice(theIndex,1);
      addDeath(mouseX, mouseY);


    }
  }
}

function addDeath(_x,_y){
  let deathSpot = {
    x: _x,
    y: _y,

  };
  death.push(deathSpot);
}

function displayDeathSpots() {
  for (let spot of death){
    textAlign(CENTER, CENTER);
    fill(0);
    text("X", spot.x, spot.y);
  }
}

function clickedInBubble(x,y,theBubble){
  let distanceAway = dist(x, y,theBubble.x, theBubble.y);
  if (distanceAway < theBubble.radius){
    return true;
  }
  else{
    return false;
  }

}
function displayBubbles(){
  for (let bubble of theBubbles) {
    fill(bubble.r, bubble.g, bubble.b, bubble.alpha);
    circle(bubble.x,bubble.y,bubble.radius*2);
  }
}

function spawnbubbles(){
  let someBubble = {
    x: random(width),
    y: height + random(30),
    speed: random(2, 8),
    radius: random(20, 100),
    r: random(210),
    g: random(210),
    b: random(200,255),
    alpha: random(255),
    timeX: random(100000000),
    timeY: random(1000000000),
    deltaTime: 0.002,
  };

  theBubbles.push(someBubble);

}

function moveBubblesRandomly(){
  for (let bubble of theBubbles) {
    let choice = random(100);
    if (choice<50){
      bubble.y -= bubble.speed;
    }
    else if (choice<65){
      bubble.y+= bubble.speed;
    }
    else if (choice<80){
      bubble.x += bubble.speed;
    }
    else{
      bubble.x -= bubble.speed;
    }
  }
}

function moveBubblesNoise(){
  for (let bubble of theBubbles) {
    bubble.y -= bubble.speed;
    //let x = noise(bubble.timeX*width);
    //let y = noise(bubble.timeY*height);
    //bubble.x = x;
    //bubble.y = y;

    //bubble.timeX += bubble.deltaTime;
    //bubble.timeY += bubble. deltaTime;
  }
}