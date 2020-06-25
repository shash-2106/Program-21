var wall, thickness;
var bullet, speed, weight;
function setup() {
  createCanvas(1600,400);
thickness=random(22,83);
 bullet = createSprite(50,200,60,10);
 wall = createSprite(1200,200,thickness,height/2);
 wall.shapeColor = color(80,80,80);
 speed = random(223,321);
 weight = random(30,52);
 bullet.velocityX = 4;
}

function draw() {
  background(255,255,255);  
  drawSprites()
  if(hasCollided(bullet, wall)){
    bullet.velocityX = 0;
    var damage = (0.5*weight*speed*speed)/(thickness*thickness*thickness);
    if(damage>10){
      bullet.shapeColor = color(255,0,0);
    }
    else{
      bullet.shapeColor = color(0,255,0);
    }
  }
  }
  function hasCollided(){
   if(wall.x-bullet.x<wall.width/2+bullet.width/2){
     return true;
   }
   return false;

  }
 

  