var mappedYposition;
var font;

function preload() {
  font = loadFont("font/onyx.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textAlign(CENTER);
  textFont(font);
  textSize(width * (10 / 300));
}

function draw() {
  mappedYposition = map(mouseY, 0, height, 0, 300);
  background(mappedYposition);
  fill(255, 255, 255);
  text("With the lights out", width / 2, height / 7);
  fill(0, 0, 0);
  text("it's less dangerous", width / 2, height - 80);
}
