var pool;
var words = [
  "Hello",
  "Hello",
  "Hello",
  "How low?",
  "Hello",
  "Hello",
  "Hello",
  "How low?",
  "Hello",
  "Hello",
  "Hello",
  "How low?",
  "Hello",
  "Hello",
  "Hello",
];
var wordIndex = 0;
var font;

function preload() {
  pool = loadImage("../img/water.jpeg");
  font = loadFont("font/onyx.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  textSize(70);
  textAlign(CENTER, CENTER);
  textFont(font);
}

function draw() {
  background(220);
  textSize(wordIndex * 20 + 50);
  image(pool, 0, 0, canvas.width, canvas.height);
  text(words[wordIndex], width / 2, height / 2 - wordIndex * 2);
}

function keyPressed() {
  wordIndex = wordIndex + 1;
  if (wordIndex > 14) {
    wordIndex = 0;
  }
}
