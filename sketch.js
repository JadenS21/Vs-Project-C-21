var bullet;
var wall,thickness;
var speed,weight;

function setup() {
  createCanvas(1600,500);
 
  wall=createSprite(1200,200,thickness,height/2);
  wall.shapeColor=(80,80,80)
  bullet=createSprite(50,100,20,20);
  bullet.shapeColor="white"
 
  thickness=random(22,83);
 
  speed=random(223,321);
  weight=random(30,42);
  
}

function draw() {
  background(0);  
  
  bullet.velocityX=speed;
  
  
  if(hasCollided(bullet,wall))
{
  bullet.velocityX=0;
  var damage=0.5 * weight * speed * speed/(thickness * thickness * thickness);

  if(damage>10)
   {
  wall.shapeColor=color("red")
   }
  if(damage<10)
   {
  wall.shapeColor=color("green")
   }
}
  
  drawSprites();
}

function hasCollided(lbullet,lwall){
 bulletRightEdge=lbullet.x +lbullet.width;
 wallLeftEdge=lwall.x

 if (bulletRightEdge>=wallLeftEdge)
  {
   return true
  }
 return false

}