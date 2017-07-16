function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);
  ellipseMode(CENTER);

  setupP();

  setupWorld();
  
  setupShot();

}

function draw() {
  background(50);
  drawBg();
  fill(255, 0, 0);

  drawGround();

  updateInput();
  drawStats();

  updateP();
  showP();
  
  updateShot();
  drawShot();
}