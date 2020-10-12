var car,wall;
var weight,speed;
var deformation;
function setup() {
  createCanvas(1400,400);
  car=createSprite(10, 200, 50, 50);
  wall=createSprite(1300,200,60,height/2);
  speed=Math.round(random(55,90))
  weight=Math.round(random(400,1500))
  car.velocityX=speed;
  deformation=0.5*weight*speed*speed/22500;
}

function draw() {
  background(255,255,255); 
  if(wall.x-car.x<car.width/2+wall.width/2){
    car.velocityX=0;
    if(deformation>180){
      car.shapeColor="red";
    }
    if(deformation>=100 && deformation<=180){
      car.shapeColor="yellow";
    }
    if(deformation<100){
      car.shapeColor="green";
    }
  } 
  drawSprites();
}