
var trex ,trex_running,ground,groundimg;
function preload(){
groundimg = loadImage("ground2.png");  
trex_running = loadAnimation("trex1.png","trex3.png","trex4.png");
}

function setup(){
  createCanvas(600,200)
  
  //create a trex sprite
 trex = createSprite(50,170,50,20);
 trex.addAnimation("running",trex_running);
 trex.scale= 0.5;
 ground = createSprite(20,190,600,20);
 ground.addImage(groundimg);
}

function draw(){
  background("white")
 
  
if(keyDown("space"))
{
trex.velocityY = -10;
}
trex.velocityY = trex.velocityY+1;
trex.collide(ground);
drawSprites();
}
