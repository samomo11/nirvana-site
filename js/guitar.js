var newString = "Here we are now, entertain us";
var guitar;
var font;

function preload() {
  guitar = loadImage("../img/guitar.webp");
  font = loadFont("../font/onyx.otf");
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  noCursor();
  textFont(font);
}

function draw() {
  background(17, 139, 200);

  textSize(70);
  noStroke();
  fill(245, 203, 92); // yellow
  // textAlign(LEFT);

  // scales values from mouseX
  ////  width of canvas -----> length of string
  let revealText = map(mouseX, 0, width - 50, 0, newString.length);
  let textPosition = width / 2 - textWidth(newString) / 2;

  // Draw the letter to the screen
  text(newString.substring(0, revealText), textPosition, height / 2);

  image(guitar, mouseX, mouseY, 500, 200);
}
