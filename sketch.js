
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
var groundObject;
var dustbinObj;
var ball;
var world;


function setup() {
	createCanvas(1600, 700);
	engine = Engine.create();
	world = engine.world;
	rectMode(CENTER);
	
	groundObject=new ground(width/2,680,width,20);
	dustbinObj=new dustbin(1200,650);

	var paperOptions = {
		restitution:0.3,
		isStatic:false,
		friction:0.5,
		density:1.2
	  }
	  ball = Bodies.circle(200,100,50,paperOptions);
	  World.add(world,ball);
	  fill("red");

	Engine.run(engine);

}


function draw() {
  background(0);
  Engine.update(engine);
  rectMode(CENTER);
  groundObject.display();
  dustbinObj.display();
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,50);
  keyPressed();

}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(ball.body,ball.body.position,{x:85,y:-85});
	}
}