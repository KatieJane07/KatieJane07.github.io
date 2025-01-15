
let video;
let playing = false;

function setup() {
  createCanvas(710, 400);

  video = createVideo("catLove.mov");

  video.hide();
}

function draw() {
  background(240);
  image(video, 10, 10, 200, 300);

}

function mousePressed() {
  if (playing) {
    video.pause();
  } else {
    video.loop();
  }

  playing = !playing;
}