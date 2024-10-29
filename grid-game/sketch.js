// Character Grid demo

let grid;
let rows;
let cols;
const GRID_SIZE = 50;
const OPEN_TILE = 0;
const CLOSED_TILE = 1;
const PLAYER = 7;
let thePlayer = {
  x: 0,
  y: 0,
};
let isAlive = true;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width / GRID_SIZE);
  rows = Math.floor(height / GRID_SIZE);
  grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);

  grid[thePlayer.y][thePlayer.x] = PLAYER;
}


function draw() {
  background(12,23,53);
  displayGrid();

}

function keyPressed() {
  if (key === "e") {
    generateEmptyGrid(cols,rows);
  }
  if (key === "w") {
    movePlayer(thePlayer.x , thePlayer.y - 1);
  }
  if (key === "s") {
    movePlayer(thePlayer.x , thePlayer.y + 1);
  }
  if (key === "a") {
    movePlayer(thePlayer.x - 1 , thePlayer.y);
  }
  if (key === "d") {
    movePlayer(thePlayer.x + 1 , thePlayer.y);
  }
}

function movePlayer(x, y) {
  if (x >= 0 && x < GRID_SIZE && y >= 0 && y < GRID_SIZE ) { //&& grid[y][x] === OPEN_TILE
    let oldX = thePlayer.x;
    let oldY = thePlayer.y;
  
    thePlayer.x = x;
    thePlayer.y = y;
  
    //grid[oldY][oldX] = OPEN_TILE;
    grid[thePlayer.y][thePlayer.x] = PLAYER;
  
    grid[thePlayer.y][thePlayer.x] = PLAYER;
    
  }
  if (grid[thePlayer.y][thePlayer.x] === CLOSED_TILE || grid[thePlayer.y][thePlayer.x] === PLAYER) {
    isAlive = false;
  }
}

function toggleCell(x,y) {
  if (x >= 0 && x < GRID_SIZE && y >=0 && y < GRID_SIZE) {
    if (grid[y][x] === CLOSED_TILE) {
      grid[y][x] = OPEN_TILE;
    }
    else if (grid[y][x] === OPEN_TILE) {
      grid[y][x] = CLOSED_TILE;
    }
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === CLOSED_TILE) {
        fill(241,253,124);
      }
      else if (grid[y][x] === OPEN_TILE) {
        fill(144,231,244);
      }
      else if (grid[y][x] === PLAYER) {
        fill(234,211,123);
      }
      square(x * GRID_SIZE , y * GRID_SIZE , GRID_SIZE);
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
