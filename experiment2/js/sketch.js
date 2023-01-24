// Experiment 2 sketch file
// Dominic Berardi
// 1/23/2023


let lcBlue;
let lcOrange;
let lcArray = [];

class Lightcycle {
  constructor(x, y, color, dir) {
    this.x = x;
    this.y = y;
    this.color = color;
    this.dir = dir;
    this.delta = 0;
    this.time = random(0.5, 3);
  }
}

function findNextDir(currDir){
  if (currDir == 1 || currDir == 2){
    return int(random(3, 5));
  }
  else if (currDir == 3 || currDir == 4){
    return int(random(1, 3));
  }
}

function moveLightcycle(lc){
  lc.delta += deltaTime / 1000;
  stroke(lc.color);
  line(lc.x, lc.y, lc.x, lc.y);
    // UP
    if (lc.dir == 1) {
      lc.y -= 1;
      lc.y -= 1;
    }
    // DOWN
    else if (lc.dir == 2) {
      lc.y += 1;
      lc.y += 1;
    }
    // LEFT
    else if (lc.dir == 3) {
      lc.x -= 1;
      lc.x -= 1;
    }
    // RIGHT
    else if (lc.dir == 4) {
      lc.x += 1;
      lc.x += 1;
    }
  // NEXT DIR
  if (lc.delta > lc.time) {
    lc.dir = findNextDir(lc.dir);
    lc.time = random(0.5, 3);
    lc.delta = 0;
  }
}

function overrideDir(lc){
  if (lc.dir == 1){
    if (lc.y - 5 <= 15){
      lc.dir = findNextDir(lc.dir);
      lc.time = random(0.5, 3);
      lc.delta = 0;
    }
  }
  else if (lc.dir == 2){
    if (lc.y + 5 >= 585){
      lc.dir = findNextDir(lc.dir);
      lc.time = random(0.5, 3);
      lc.delta = 0;
    }
  }
  else if (lc.dir == 3){
    if (lc.x - 5 <= 15){
      lc.dir = findNextDir(lc.dir);
      lc.time = random(0.5, 3);
      lc.delta = 0;
    }
  }
  else if (lc.dir == 4){
    if (lc.x + 5 >= 585){
      lc.dir = findNextDir(lc.dir);
      lc.time = random(0.5, 3);
      lc.delta = 0;
    }
  }
}

function mouseClicked(){
  let rStr = str(int(random(0, 255)));
  let gStr = str(int(random(0, 255)));
  let bStr = str(int(random(0, 255)));
  let rgbStr = "rgb(" + rStr + "," + gStr + "," + bStr + ")";
  lcArray.push(new Lightcycle(mouseX, mouseY, rgbStr, int(random(1, 5))));
}

function setup() {
  createCanvas(600, 600);
  background("#000000");
  strokeWeight(4);
  lcBlue = new Lightcycle(100, 100, "#6495ED", 4);
  lcOrange = new Lightcycle(500, 500, "#FFA500", 3);
}

function draw() {
  overrideDir(lcBlue);
  moveLightcycle(lcBlue);
  overrideDir(lcOrange);
  moveLightcycle(lcOrange);
  for (let lc = 0; lc < lcArray.length; lc++){
    overrideDir(lcArray[lc]);
    moveLightcycle(lcArray[lc]);
  }
}