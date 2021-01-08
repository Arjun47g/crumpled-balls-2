
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var dustbinimg;

function preload(){
 dustbinimg = loadImage("dustbin.png")
  
}

function setup() {
	createCanvas(1200, 500);
  engine = Engine.create();
	world = engine.world;



	ground = new Ground(600,480,1200,20);
  paper = new Paper(200, 450, 50);
  


	dustbin1 = new Dustbin(950,470,150,20);
	dustbin2 = new Dustbin(890,400,20,160);
	dustbin3 = new Dustbin(1010,400,20,160);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(23, 260, 20);

  
  ground.display();

  paper.display();

  dustbin1.display();
  dustbin2.display();
  dustbin3.display();

  imageMode(CENTER);
  image(dustbinimg, 950, 400, 160, 180);


  
  drawSprites();
 
}

function keyPressed(){

if (keyCode === UP_ARROW) {
Matter.Body.applyForce(paper.body,paper.body.position,{x:120, y:-110});
	 
}	

}


