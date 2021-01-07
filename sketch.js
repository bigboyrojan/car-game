var car, car2, car3
var wall1, wall2
var target1, target2, target3
var speed
var weight
var deformation

function setup() {
speed = random(55,90);
weight = random(400,1500);

  createCanvas(800,400);


  var car = createSprite(30,50,50,25);
  car.shapeColor = "red";
  
  var car2 = createSprite(30,200,50,25);
  car2.shapeColor = "blue";

  var car3 = createSprite(30,350,50,25);
  car3.shapeColor = "green";
  

  var wall1 = createSprite(30,125,1540,15);
  var wall2 = createSprite(30,275,1540,15);

  var target1 = createSprite (770,50,50,15);
  var target2 = createSprite (770,200,50,15);
  var target3 = createSprite (770,350,50,15);

  var deformation = 0.5 * speed * weight * speed/22500
}

function draw() {
  background(255,255,75);
  car.velocityX = speed;
  car2.velocityX = speed;
  car3.velocityX = speed;
  if  (car.isTouching(target1)) {
    car.shapeColor = "black";
      }
   if  (car2.isTouching(target2)) {
car2.shapeColor = "orange";
  }
  if  (car3.isTouching(target3)) {
    car3.shapeColor = "lime";
      }       

   if (car.deformation > 180 && car.isTouching(target1)) {
car.shapeColor = (255,0,0);
   }   
   else if (car.deformation > 100 && car.isTouching(target1)) {
     car.shapeColor = (0,255,0);
   }
else {
  car.shapeColor = (230,230,0)
}



   
  drawSprites();
}