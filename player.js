//Player
var p;
var JUMP = 10;


var setupP = function(){
  p = createSprite(width/2,height/2,25,75);
}

var updateP = function(){
  p.velocity.y += GRAVITY;
  
  if(p.collide(ground)) {
    p.velocity.y = 0;
  }
  
  if(inputStats=="hit"){
    p.velocity.y = -JUMP;
  }
  
  if(inputStats=="released"){
    p.velocity.x = -5;
  }
  if(p.position.x<width*0.15){
    p.velocity.x = 0;
  }
  
  if(inputStats=="hold"){
    p.velocity.x = 5;
  }
  if(p.position.x>width*0.8 && inputStats=="hold"){
    p.velocity.x = 0;
  }
  
}

var showP = function(){
  fill(255,102,204);
  rect(p.position.x,p.position.y,p.originalWidth,p.originalHeight);
}