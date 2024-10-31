// Character Grid demo

let grid;
let cellSize;
const GRID_SIZE = 20;
const OPEN_TILE = 0;
const CLOSED_TILE = 1;
const PLAYER = 7;
let thePlayer = {
  x: 0,
  y: 0,
};
let isAlive = true;

function setup() {
  if ( windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }
  cellSize = height/GRID_SIZE;
  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);

  grid[thePlayer.y][thePlayer.x] = PLAYER;
}

function windowResized() {
  if ( windowWidth < windowHeight) {
    resizeCanvas(windowWidth, windowWidth);
  }
  else {
    resizeCanvas(windowHeight, windowHeight);
  }
  cellSize = height/GRID_SIZE;
}

function draw() {
  background(12,23,53);
  displayGrid();

}

function keyPressed() {
  if (key === "r") {
    grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
  }
  if (key === "e") {
    grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
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
  
    grid[oldY][oldX] = OPEN_TILE;
    grid[thePlayer.y][thePlayer.x] = PLAYER;
  
    
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);
  
  toggleCell(x,y);
  // toggleCell(x+1,y);
  // toggleCell(x-1,y);
  // toggleCell(x,y+1);
  // toggleCell(x,y-1);
  
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
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === CLOSED_TILE) {
        fill(122,253,153);
      }
      else if (grid[y][x] === OPEN_TILE) {
        fill(104,200,255);
      }
      else if (grid[y][x] === PLAYER) {
        fill(242,111,195);
      }
      square(x * cellSize , y * cellSize , cellSize);
    }
  }
}

function generateRandomGrid(cols, rows){
  let newGrid = [];
  for (let y = 0; y < rows; y++) {
    newGrid.push([]);
    for (let x = 0; x < cols; x++) {
      //make it 1 or 0 50/50
      if (random(100) < 50 ) {
        newGrid[y].push(CLOSED_TILE);

      }
      else {
        newGrid[y].push(OPEN_TILE);
      }

    }
  }
  return newGrid;

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
