var p;

function setup() {
  createCanvas(800,400);
  rectMode(CENTER);
  p = createVector(100,100);
}

function draw() {
  background(50);
  line(0,height*0.9,width,height*0.9);
   line(width-((frameCount*10)%width),0,width-((frameCount*10)%width),height*0.9);
  fill(255,0,0);
  rect(p.x,p.y,50,100);
}