// Snake
// Katie Strawson
// November 8th 2024
// Extra for Experts
// uhmmmmm

let grid;
let rows;
let cols;
let foodX;
let foodY;
let appleImg;
let circleImg;
let difficulty; //maybe
let length = 0;
let direction = 4;
let isAlive = true;
let thePlayer = {
  x: 0,
  y: 0,
};
const HEAD = 7;
const FOOD = 9;
const BODY = 8;
const OPEN_TILE = 0;
const GRID_SIZE = 50;
const CLOSED_TILE = 1;

function preload() {
  circleImg = loadImage("circle.png");
  appleImg = loadImage("apple.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width / GRID_SIZE);
  rows = Math.floor(height / GRID_SIZE);
  grid = generateEmptyGrid(cols, rows);
  //speed adjust
  frameRate(3);
  grid[thePlayer.y][thePlayer.x] = HEAD;
  //for (i=0; i < number of food; i++){
  generateFood();
}

function draw() {
  background(144,231,244);
  displayGrid();
  snakeMoving();
}

function snakeMoving() {
  //keeps the snake moving that direction
  if (direction === 1) {
    movePlayer(thePlayer.x + 1 , thePlayer.y);
  }
  if (direction === 2) {
    movePlayer(thePlayer.x , thePlayer.y - 1);
  }
  if (direction === 3) {
    movePlayer(thePlayer.x - 1 , thePlayer.y);
  }
  if (direction === 4) {
    movePlayer(thePlayer.x , thePlayer.y + 1);
  }

  if (isAlive === false) {
    //end sequence
    fill(0);
    text("loser", 200, 200);
  }
}

function keyPressed() {
  if (key === "w") {
    direction = 2;
  }
  if (key === "s") {
    direction = 4;
  }
  if (key === "a") {
    direction = 3;
  }
  if (key === "d") {
    direction = 1;
  }
}

function movePlayer(x, y) {
  console.log("moving to:", x, y);
  console.log(x, y, rows, cols);
  //checks if snake is in bounds
  if (x < 0 || y > rows - 1 || x > cols || y < 0) {
    //causes death
    isAlive = false;
  }

  else {
    //move snake
    let oldX = thePlayer.x;
    let oldY = thePlayer.y;
    thePlayer.x = x;
    thePlayer.y = y;
    grid[oldY][oldX] = OPEN_TILE;
    grid[thePlayer.y][thePlayer.x] = HEAD;
  }

  //check if the player is on the same square as the food
  if (foodX === thePlayer.x && foodY === thePlayer.y) {
    length += 1;
    generateFood();
  }

  //checks if player runs into itself
  // if player.x and player. y equals any body x y
  //isAlive = false;

}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === CLOSED_TILE) {
        //obsticles ??
        fill(241,253,124);
        square(x * GRID_SIZE , y * GRID_SIZE , GRID_SIZE);
      }
      else if (grid[y][x] === OPEN_TILE) {
        fill(144,231,244);
        square(x * GRID_SIZE , y * GRID_SIZE , GRID_SIZE);
      }
      else if (grid[y][x] === HEAD) {
        image(circleImg, x * GRID_SIZE, y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
        //fill(234,244,255);
      }
      else if (grid[y][x] === FOOD) {
        image(appleImg, x * GRID_SIZE, y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
        //fill(184,122,135);
      }
      else if (grid[y][x] === BODY) {
        fill(255,0,0);
      }
    }
  }
}

function generateEmptyGrid(cols, rows) {
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      newGrid[y].push(OPEN_TILE);
    }
  }
  return newGrid;
}


function generateFood() {
  //chooses a random square to place food
  foodX = Math.floor(random(width)/GRID_SIZE);
  foodY = Math.floor(random(height)/GRID_SIZE);
  grid[foodY][foodX] = FOOD;
}