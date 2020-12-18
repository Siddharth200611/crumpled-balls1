const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
//var a,b,c;
var paperObject;
//var ground;
var engine,world;
function preload(){
	
}

function setup() {
	createCanvas(700, 700);


	engine = Engine.create();
	world = engine.world;


	
	//Create the Bodies Here.
	paperObject=new Paper(100,380,20,20)
	ground = new Ground(350,400,700,20)
	a = new Ground(550,360,150,10)
	b = new Ground(480,315,10,80)
	c = new Ground(620,315,10,80)
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  Engine.update (engine)

paperObject.display();
ground.display();
c.display();
b.display();
a.display();

  
  drawSprites();
 
}
function keyPressed(){
	if (keyCode === UP_ARROW){
	Matter.Body.applyForce(paperObject.body,paperObject.body.position,{x:12,y:-15})
	}
}


