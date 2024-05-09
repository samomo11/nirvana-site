var font;
var pool;

function preload() {
  font = loadFont("font/onyx.otf");
  pool = loadImage("img/water.jpeg");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  background(17, 139, 200);
  textFont(font);
}

function draw() {}

function mouseClicked() {
  textSize(50);
  textAlign(CENTER);
  fill("black");
  text("I feel stupid and", width / 2, height / 2);
  fill(245, 203, 92);
  text("contagious", mouseX, mouseY);
  textSize(50);
}
