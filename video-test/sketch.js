
let video;
let scene = "two"
show = false;
playing = false;


function setup() {
  createCanvas(400, 600);
  video = createVideo("catLove.mov");
}

function draw() {
  showVideo();
  background(240);
  image(video, 10, 10, 400, 600);
  if (keyIsPressed && keyCode === 32) {
    scene = "one";
  }
}

function mousePressed() {
  if (scene === "one") {
    if (playing === false) {
      show = true;
      playing = true;

    }
    else {
      scene = "two"
      video.pause();
      show = false;
    }
  }
  console.log(scene);
}

function showVideo() {
  if (show === true) {
    video.loop();
  }
  else {
    //console.log("ahh");
    video.hide();
  }
}