// Grid demo
//oct 22

// let grid = [[1,0,1,0]
//   [0,1,0,1]
//   [1,0,1,0]
//   [0,1,0,1]];

let grid;
let cellSize;
let cols;
let rows;
const GRID_SIZE = 20;

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width / GRID_SIZE);
  rows = Math.floor(height / GRID_SIZE);
  grid = generateRandomGrid(cols, rows);
}

function draw() {
  background(12,23,53);
  displayGrid();
}

function keyPressed() {
  
}

// function mousePressed() {
//   let x = Math.floor(mouseX/cellSize);
//   let y = Math.floor(mouseY/cellSize);
  
//   toggleCell(x,y);
//   toggleCell(x+1,y);
//   toggleCell(x-1,y);
//   toggleCell(x,y+1);
//   toggleCell(x,y-1);
  
// }

function toggleCell(x,y) {
  if (x >= 0 && x < GRID_SIZE && y >=0 && y < GRID_SIZE) {
    if (grid[y][x] === 1) {
      grid[y][x] = 0;
    }
    else {
      grid[y][x] = 1;
    }
  }
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === 1) {
        fill(241,253,124);
      }
      else if (grid[y][x] === 0) {
        fill(144,231,244);
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
      newGrid[y].push(0);
    }
  }
  return newGrid;
}
