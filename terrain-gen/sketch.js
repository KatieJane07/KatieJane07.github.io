// terrain
//Kathrine
// Oct 7

let terrain = [];
const NUMBER_OF_RECTS = 800;

function setup() {
  createCanvas(windowWidth, windowHeight);
  let widthOfRect = width/NUMBER_OF_RECTS;
  generateTerrain(widthOfRect);
}

function draw() {
  background(233,199,245);
  for (let someRect of terrain) {

    fill(137,215,153);
    noStroke();
    rect(someRect.x,someRect.y,someRect.w,someRect.h);
  }

}

function spawnRectangle(leftSide, rectHeight, rectWidth) {
  let theRect = {
    x: leftSide,
    y: height - rectHeight,
    w: rectWidth,
    h: rectHeight,
  };

  return theRect;
}

function generateTerrain(widthofRect) {
  let time = 0;
  let deltaTime = 0.003;
  for (let x = 0; x  <width; x += widthofRect) {
    let theHeight = noise(time) * height;
    let someRect = spawnRectangle(x, theHeight, widthofRect);
    terrain.push(someRect);
    time += deltaTime;
  }
}
