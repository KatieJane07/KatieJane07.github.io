// Project Title
// Your Name
// Date
//
// Extra for Experts:
// - describe what you did to take this project "above and beyond"

let triangleArray = [
  {x: 200, y: 25},
  {x: 25, y:550},
  {x:375, y:550}
];
let depth = 0;
let colours = ['indigo','rebeccapurple','slateblue','mediumslateblue','mediumpurple','darkorchid','mediumorchid','orchid'];
function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
  sierpinski(triangleArray, depth);
}

function mousePressed() {
  if (depth < 7) {
    depth ++;


  }
  else {
    depth = 0;
  }
}
function sierpinski(points, depth) {
  fill(colours[depth]);
  triangle(points[0].x, points[0].y,points[1].x,points[1].y, points[2].x,points[2].y);
  //draw upper trignale
  if (depth > 0) {
    //draw upper trignale
    sierpinski([points[0], midPoint(points[0], points[1]), midPoint(points[0],points[2])], depth-1);

    //draw bottom left triangle
    sierpinski([points[1], midPoint(points[0], points[1]), midPoint(points[1],points[2])], depth-1);

    //draw bottom right tringale
    sierpinski([points[2], midPoint(points[2], points[1]), midPoint(points[0],points[2])], depth-1);
  }
  
}

function midPoint(point1,point2) {
  let midX = (point1.x+point2.x)/2;
  let midY = (point1.y+point2.y)/2;
  return {x:midX,y: midY};
}