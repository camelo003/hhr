//world
var ground;
var groundLine;
var drawGround = function(){
    fill(25);
    rect(ground.position.x,ground.position.y,ground.originalWidth,ground.originalHeight);
  }
var setupWorld = function(){
  groundLine = height*0.9;
  ground = createSprite(width/2,groundLine+(height-groundLine)/2,width,height-groundLine);
}

var GRAVITY = 0.4;