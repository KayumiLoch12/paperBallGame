
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var paperball;
var box1, box2, box3;
var ground;
function preload()
{
	
}

function setup() {
	createCanvas(1080, 700);
    
	engine = Engine.create();
  world = engine.world;
  ground = new Ground(400,680, 10090,20);
  paperball = new PaperBall(40,60,20);
  box1 = new Basket(1000,660,180,20);
  box2 = new Basket(900,660,20,180);
  box3 = new Basket(1000,660,20,180);
	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  
  ground.display();
  paperball.display();
  box1.display();
  box2.display();
  box3.display();
  drawSprites();
 
}
function keyPressed() {
if (keyCode === UP_ARROW){
  Matter.Body.applyForce(paperball.body, paperball.body.position,{x:85, y:-85});
} 



}


