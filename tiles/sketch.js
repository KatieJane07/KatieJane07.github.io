// Tile art 
// Kathrine
//Oct 4

const TILE_SIZE = 15;
let theTiles = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  frameRate(3);
  background(0,3,0);
  theTiles=[];
  for(let x = 0; x < windowWidth; x += TILE_SIZE){
    for(let y = 0; y<windowHeight; y += TILE_SIZE){
      let sometile = spawnTile(x,y);
      theTiles.push(sometile);
    }
  }

  for(let myTile of theTiles){
    stroke(50,255,50);
    strokeWeight(random(5));
    line(myTile.x1, myTile.y1, myTile.x2, myTile.y2);
  }

}

function spawnTile(x,y){
  let tile;

  let choice = random(100);
  if (choice <50){
    //neg
    tile = {
      x1: x - TILE_SIZE/2,
      y1: y - TILE_SIZE/2,
      x2: x + TILE_SIZE/2,
      y2: y + TILE_SIZE/2,
    };
  
  }
  else{
    //pos
    tile = {
      x1: x - TILE_SIZE/2,
      y1: y + TILE_SIZE/2,
      x2: x + TILE_SIZE/2,
      y2: y - TILE_SIZE/2,
    };
  }
  

  return tile;

}
