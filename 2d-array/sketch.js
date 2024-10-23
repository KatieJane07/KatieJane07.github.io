// Grid demo
//oct 22

// let grid = [[1,0,1,0]
//   [0,1,0,1]
//   [1,0,1,0]
//   [0,1,0,1]];

let grid;
let cellSize;
const GRID_SIZE = 20;

function setup() {
  if ( windowWidth < windowHeight) {
    createCanvas(windowWidth, windowWidth);
  }
  else {
    createCanvas(windowHeight, windowHeight);
  }
  cellSize = height/GRID_SIZE;

  grid = generateRandomGrid(GRID_SIZE, GRID_SIZE);
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
  else if (key === "e") {
    grid = generateEmptyGrid(GRID_SIZE, GRID_SIZE);
  }
}

function mousePressed() {
  let x = Math.floor(mouseX/cellSize);
  let y = Math.floor(mouseY/cellSize);
  
  toggleCell(x,y);
  toggleCell(x+1,y);
  toggleCell(x-1,y);
  toggleCell(x,y+1);
  toggleCell(x,y-1);
  
}

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
  for (let y = 0; y < GRID_SIZE; y++) {
    for (let x = 0; x < GRID_SIZE; x++) {
      if (grid[y][x] === 1) {
        fill(122,253,153);
      }
      else if (grid[y][x] === 0) {
        fill(104,200,255);
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
        newGrid[y].push(1);

      }
      else {
        newGrid[y].push(0);
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
      newGrid[y].push(0);


    }
  }
  return newGrid;

}
