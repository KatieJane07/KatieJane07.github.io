// Snake
// Katie Strawson
// November 12th 2024
// Extra for Experts
// uhmmmmm

//to do
// add body length increase
// add collisions with body
// add start screen 
// music, difficulty, start, how to play
// html elements for start screen
// add obsticles if i have time (if difficulty is implimented)

//current problems
// snake does not grow !
// you lose screen very sad -add score aka length
// can still move after losing
// no start screen
// speed is literally just frame rate ! dx dy?
// player moves off right

let grid;
let rows;
let cols;
let foodX;
let foodY;
let choice;
let kiwiImg;
let grapeImg;
let appleImg;
let cherryImg;
let bananaImg;
let circleImg;
let difficulty; //maybe
let length = 0;

//snake is an array, when length increases one less element 
//is turned into an open tile
//how would collisions work

// let snake = [{x:0, y:0}]
//for (let segment of snake) generate circle shape
//snake.push({loco of food}) or like just dont pop
//snake.pop if no food

let snake = [{x: 0, y: 0}];
let direction = 4;
let isAlive = true;
let thePlayer = {
  x: 0,
  y: 0,
};
const HEAD = 7;
const FOOD = 9;
const OPEN_TILE = 0;
const GRID_SIZE = 50;
const CLOSED_TILE = 1;

function preload() {
  kiwiImg = loadImage("kiwi.png");
  appleImg = loadImage("apple.png");
  grapeImg = loadImage("grape.png");
  bananaImg = loadImage("banana.png");
  cherryImg = loadImage("cherry.png");
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

  generateFood();
  //chooses random fruit
  choice = random(100);
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
    text("you had a length of ", 200, 250);
    text(length, 308,250);
  }
}

function keyPressed() {
  if (key === "w") {
    //snake cannot reverse direction
    //if (state !== 4){
    direction = 2;
    //}
    // else {
    //   state = 4;
    // }
  }
  if (key === "s") {
    //if (state !== 2){
    direction = 4;
    //}
    // else {
    //   state = 2;
    // }
  }
  if (key === "a") {
    //if (state !== 1) {
    direction = 3;
    //}
    // else {
    //   state = 1;
    // }
  }
  if (key === "d") {
    //if (state !== 3) {
    direction = 1;
  }
  // else {
  //   state = 3;
  // }
  //}
}

function movePlayer(x, y) {
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
  //if the players location is on a food tile
  if (grid[thePlayer.y][thePlayer.x] === grid[foodY][foodX]) {
    length += 1;
    generateFood();
    choice = random(100);
  }

  //checks if player runs into itself
  // if player.x and player. y equals any body x y
  //isAlive = false;

}

function displayGrid() {
  for (let y = 0; y < rows; y++) {
    for (let x = 0; x < cols; x++) {
      if (grid[y][x] === CLOSED_TILE) {
        //obsticals ??
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