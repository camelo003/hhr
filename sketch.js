function setup() {
  createCanvas(800, 400);
  rectMode(CENTER);

  //Player
  setupP();

  setupWorld();

}

function draw() {
  background(50);
  line(width - ((frameCount * 10) % width), 0, width - ((frameCount * 10) % width), height * 0.9);
  fill(255, 0, 0);
  rect(p.x, p.y, 50, 100);

  drawGround();

  updateInput();
  drawStats();

  updateP();
  showP();
}