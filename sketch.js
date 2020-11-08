var fix, mov

function setup() {
  createCanvas(800,400);
  fix = createSprite(400, 200, 50, 50);
  mov = createSprite(300, 100, 80,50)
  fix.shapeColor ="lime"
  mov.shapeColor ="lime"
  fix.debug = true
  fix.setCollider("circle", 0,0,30)
}

function draw() {
  background("black");  
  mov.x = mouseX
  mov.y = mouseY
console.log(mov.x-fix.x)
if(mov.x-fix.x <(fix.width+mov.width)/2&&
   fix.x-mov.x<(fix.width+mov.width)/2&&
   mov.y-fix.y <(fix.width+mov.width)/2&&
   fix.y-mov.y<(fix.width+mov.width)/2 )
{
mov.shapeColor ="blue"
fix.shapeColor="blue"
}  else {

  mov.shapeColor ="lime"
  fix.shapeColor = "lime"
}


drawSprites();
}