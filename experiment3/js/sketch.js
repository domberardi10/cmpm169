var square1;
var square2;
var square3;
var square4;
var square5;
var square6;
var color_array = [];
var nums = 200;
var noiseScale = 3500;
color_array = ['#d14343', '#e07707', '#d5e036', '#59ad32', '#46e3b7', '#091adb', '#87c1ff', '#eac9ff', '#460063', '#590433'];

function setup(){
    smooth();
	createCanvas(windowWidth, windowHeight);
	background(lerpColor(color(0, 0, 0), color(color_array[int(random(0, 10))]), 0.1));
    square1 = new Shape();
    square2 = new Shape();
    square3 = new Shape();
    square4 = new Shape();
    square5 = new Shape();
    square6 = new Shape();
}

function draw(){
	noStroke();
	smooth();
    square1.draw();
    square2.draw();
    square3.draw();
    square4.draw();
    square5.draw();
    square6.draw();
}

class Shape{
    constructor(){
        this.centerX = random(500, windowWidth  - 500);
        this.centerY = random(500, windowHeight - 500);
        this.size = random(200, 500);
        this.array = [];
        this.createArray();
    }

    createArray(){
        for(var i = 0; i < nums; i++){
            let factor = int(random(0, 2)) == 0 ? -1 : 1;
            this.array[i] = new Particle(this.centerX, this.centerY, 1, 1, 0.4, noiseScale - (random(500, 1500) * factor), this.centerX, this.centerY, this.size);
        }
    }

    draw(){
        for(let i in this.array){
            this.array[i].draw();
        }
    }
}

class Particle{
    constructor(x, y, alpha, radius, speed, noise, centerX, centerY, squareSize){
        this.direction = createVector(0, 0);
        this.velocity  = createVector(0, 0);
        this.position  = createVector(x, y);
        this.speed = speed;
        this.color = lerpColor(color(color_array[int(random(0, 10))]), color(color_array[int(random(0, 10))]), random(0, 1));
        this.alpha = alpha;
        this.radius = radius;
        this.noise = noise;
        this.centerX = centerX;
        this.centerY = centerY;
        this.squareSize = squareSize;
    }

    move(){
        this.position.x = constrain(this.position.x, this.centerX - this.squareSize, this.centerX + this.squareSize);
        this.position.y = constrain(this.position.y, this.centerY - this.squareSize, this.centerY + this.squareSize);
		var angle = noise(this.position.x/this.noise, this.position.y/this.noise)*TWO_PI*this.noise;
		this.direction.x = cos(angle);
		this.direction.y = sin(angle);
		this.velocity = this.direction;
		this.velocity.mult(this.speed);
		this.position.add(this.velocity);
    }

    checkEdge(){
        if(this.position.x > this.centerX + this.squareSize || this.position.x < this.centerX - this.squareSize || this.position.y > this.centerY + this.squareSize || this.position.y < this.centerY - this.squareSize){    
			// this.position.x = random(this.centerX - this.squareSize, this.centerX + this.squareSize);
			// this.position.y = random(this.centerY - this.squareSize, this.centerY + this.squareSize);
            this.position.x = this.centerX;
            this.position.y = this.centerY;
            let factor = int(random(0, 2)) == 0 ? -1 : 1;
            this.noise = noiseScale - (random(500, 1500) * factor)
		}
    }

    draw(){
        this.move();
        this.checkEdge();
        fill(this.color);
        ellipse(this.position.x, this.position.y, this.radius, this.radius);
    }
}

// function branch(p) {
    //p.angle *= 0.67;
    //delta += deltaTime / 1000;
    //if (delta >= 5){
        //push();
        //rotate(p.angle);
        //branch(p);
        //pop();
        //push();
        //rotate(-p.angle);
        //branch(p);
        //pop();
        //delta = 0;
    //}
//}