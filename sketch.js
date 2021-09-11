console.log()
var ship_moving, sea_moving, sea, ship
function preload(){
 
  //loadAnimation
  ship_moving= loadAnimation("ship-1.png","ship-2.png");
  sea_moving= loadAnimation("sea.png");

}

function setup(){
  createCanvas(400,400);
  
  sea= createSprite(200,300,20,100);
  sea.addAnimation("moving", sea_moving);
  sea.scale=0.5;

  ship= createSprite(80,340,20,80);
  ship.addAnimation("running", ship_moving);
  ship.scale=0.1;

  
}

function draw() {
background("blue");
  drawSprites()

  sea.velocityX=-4;
  
  if(sea.x < 0){
    sea.x = sea.width/8;
  }

}