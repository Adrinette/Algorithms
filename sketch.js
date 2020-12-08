var fixedrect,movingrect



function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(400, 200, 50, 100);
  movingrect=createSprite(400, 200, 100, 50);
  fixedrect.shapeColor="red"
  movingrect.shapeColor="red"
  fixedrect.debug=true
  movingrect.debug=true
}

function draw() {
  background("black");  
  movingrect.x = mouseX
  movingrect.y = mouseY
 if(isTouching(fixedrect,movingrect)){
   fixedrect.shapeColor = "green"
  movingrect.shapeColor = "green"
 }
 else{
  fixedrect.shapeColor="red"
  movingrect.shapeColor="red"
 }
  drawSprites();
}