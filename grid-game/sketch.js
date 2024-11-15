// Snake
// Katie Strawson
// November 14th 2024
// Extra for Experts
// Coordinate arrays -> array of objects
// template literals

let grid;
let rows;
let cols;
let foodX;
let foodY;
let choice;
let speed = 3;
let length = 0;
let snake = [{x: 1, y: 1}];
let direction = 4;
let isAlive = true;
let thePlayer = {
  x: 0,
  y: 0,
};

const FOOD = 9;
const OPEN_TILE = 0;
const GRID_SIZE = 70;

let kiwiImg;
let grapeImg;
let appleImg;
let cherryImg;
let bananaImg;
let circleImg;
let bodyImg;

function preload() {
  kiwiImg = loadImage("kiwi.png");
  appleImg = loadImage("apple.png");
  grapeImg = loadImage("grape.png");
  bananaImg = loadImage("banana.png");
  cherryImg = loadImage("cherry.png");
  circleImg = loadImage("circle.png");
  bodyImg = loadImage("body.png");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  cols = Math.floor(width / GRID_SIZE);
  rows = Math.floor(height / GRID_SIZE);
  grid = generateEmptyGrid(cols, rows);

  generateFood();
  //chooses random fruit
  choice = random(100);
}

function draw() {
  background(144,231,244);
  displayGrid();
  displaySnake();
  snakeMoving();
  //speed adjust
  frameRate(speed);
}

function snakeMoving() {
  // Get the current head position
  let x = snake[snake.length - 1].x;
  let y = snake[snake.length - 1].y;

  // Update x and y based on the direction
  if (direction === 1) { 
    //Right
    x += 1;
  }
  else if (direction === 2) {
    //Up
    y -= 1; 
  }
  else if (direction === 3) {
    //Left
    x -= 1;
  }
  else if (direction === 4) {
    //Down
    y += 1;
  }

  movePlayer(x, y);
  // add segement
  snake.push({ x, y });

  // Check for food
  if (x === foodX && y === foodY) {
    //length is basically score
    length += 1;
    generateFood(); 
    //choose a random fruit
    choice = random(100); 
    grid[y][x] = OPEN_TILE;
  }
  else {
    //removes tail
    snake.shift(); 
  }

  // Check if the snake is still alive
  if (!isAlive) {
    fill(0);
    let size = width/10;
    textSize(size);
    stroke(144,231,244);
    strokeWeight(40);
    text("Game Over", 100, 100);
    text("Final Length: " + length, 100, 100 + size);
    //end game
    noLoop(); 
  }
}

function keyPressed() {
  if (key === "w") {
    //snake cannot reverse direction
    if (direction !== 4){
      direction = 2;
    }

  }
  if (key === "s") {
    if (direction !== 2){
      direction = 4;
    }
  
  }
  if (key === "a") {
    if (direction !== 1) {
      direction = 3;
    }
    
  }
  if (key === "d") {
    if (direction !== 3) {
      direction = 1;
    }
  }

  if (keyCode === UP_ARROW) {
    speed += 0.5;
    
  }
  if (keyCode === DOWN_ARROW) {
    speed -= 0.5;
  }
}

function displaySnake() {
  for (let segment of snake) {
    //draw segement x y
    image(bodyImg, segment.x * GRID_SIZE, segment.y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
  }

}

function movePlayer(x, y) {
  // Check if the new position is out of bounds
  if (x < 0 || x >= cols || y < 0 || y >= rows) {
    isAlive = false;
    return;
  }

  // Check for collision with itself
  for (let segment of snake) {
    if (segment.x === x && segment.y === y) {
      isAlive = false;
      return;
    }
  }
}


function checkDuplicates(array) {
  // Check if any two segments share the same coordinates
  // Checks if snake runs into itself
  let seen = {};
  for (let segment of array) {
    let coords = `${segment.x},${segment.y}`;
    if (seen[coords]) {
      return true;
    }
  }
  return false;
}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === OPEN_TILE) {
        fill(144,231,244);
        square(x * GRID_SIZE , y * GRID_SIZE , GRID_SIZE);
      }
      else if (grid[y][x] === FOOD) {
        //chooses a random fruit
        if (choice > 80) {
          //apple
          image(appleImg, x * GRID_SIZE, y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
        }
        else if (choice > 60) {
          //banana
          image(bananaImg, x * GRID_SIZE, y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
        }
        else if (choice > 40) {
          //cherry
          image(cherryImg, x * GRID_SIZE, y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
        }
        else if (choice > 20) {
          //grape
          image(grapeImg, x * GRID_SIZE, y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
        }
        else {
          // kiwi
          image(kiwiImg, x * GRID_SIZE, y * GRID_SIZE, GRID_SIZE, GRID_SIZE);
        }
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

