// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let clicks = 0;
let highestClick = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  if (getItem("highest")) {
    highestClick = getItem("highest");
  }
}

function draw() {
  background(76,35,96);
  displayClicks();
  displayHighest();
}

function mousePressed() {
  clicks ++;
  if (clicks > highestClick) {
    highestClick = clicks;
  }
  storeItem("highest", highestClick);
}

function displayClicks() {
  fill(245,153,143);
  textSize(50);
  text(clicks, width/2, height/2);
}

function displayHighest() {
  fill(14,244,211);
  textSize(50);
  text(highestClick, width/3, height/3);
}