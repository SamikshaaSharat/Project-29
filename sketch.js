//var ground;
var block1;





function setup() {
  createCanvas(800,400);
  createSprite(400, 200, 50, 50);

  //ground = new Ground(400,height,100,100);
  //ground = new Ground(600,200,1200,20);

  block1 = new Box(220,200,10,10);

}

function draw() {
  background(255,255,255); 
  //ground.display(); 
  //ground.display();
  block1.display();
  drawSprites();
}