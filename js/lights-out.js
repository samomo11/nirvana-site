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
  mappedYposition = map(mouseY, 0, height, 0, 255);
  background(mappedYposition);
  fill(255, 255, 255);
  text("With the lights out", width / 2, height / 10);
  fill(0, 0, 0);
  text("it's less dangerous", width / 2, height - 50);
}
