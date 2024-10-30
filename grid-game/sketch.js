// Character Grid demo

let grid;
let circleImg;
let rows;
let cols;
const GRID_SIZE = 50;
const OPEN_TILE = 0;
const CLOSED_TILE = 1;
const HEAD = 7;
const FOOD = 9;
const BODY = 8;
let length = 0;
let thePlayer = {
  x: 0,
  y: 0,
};
let isAlive = true;
let direction = 1;

function preload() {
  circleImg = loadImage("circle.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width / GRID_SIZE);
  rows = Math.floor(height / GRID_SIZE);
  grid = generateEmptyGrid(cols, rows);
  //speed adjust
  frameRate(3);
  grid[thePlayer.y][thePlayer.x] = HEAD;
}


function draw() {
  background(144,231,244);
  displayGrid();

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
    fill(0);
    text("loser", 200, 200);
  }
}

function keyPressed() {
  if (key === "e") {
    generateEmptyGrid(cols,rows);
  }
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
  let oldX = thePlayer.x;
  let oldY = thePlayer.y;
  thePlayer.x = x;
  thePlayer.y = y;
  //grid[oldY][oldX] = OPEN_TILE;
  grid[thePlayer.y][thePlayer.x] = HEAD;
  
  if (x < 0 || y > rows || x > cols || y < 0) {
    isAlive = false;
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === CLOSED_TILE) {
        //obsticles
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
        fill(184,122,135);
        square(x * GRID_SIZE , y * GRID_SIZE , GRID_SIZE);
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

function eatFood() {
  //generate 1 2 or 3 bits of food
  
  //if head touches food length += 1
}