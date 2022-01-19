const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var roof;
var bob1, bob2, rope2, rope1, bob3, rope3, bob4, rope4, bob5, rope5;
//Create multiple bobs, mulitple ropes variable here


function setup() {
	createCanvas(800, 600);
	rectMode(CENTER);

	engine = Engine.create();
	world = engine.world;

	var roof_options={
		isStatic:true			
	}

	roof = Bodies.rectangle(400,100,230,20,roof_options);
    World.add(world,roof);

	var bo = {
		restitution: 1,
		density: 0.8,
		friction:0
	}
	bob1 = Bodies.circle(320, 380, 20, bo)
	World.add(world,bob1)

	rope1 = new rope(bob1, roof, -80, 0)

	bob2 = Bodies.circle(360, 380, 20, bo)
	World.add(world,bob2)

	rope2 = new rope(bob2, roof, -40, 0)

	bob3 = Bodies.circle(400, 380, 20, bo)
	World.add(world,bob3)

	rope3 = new rope(bob3, roof, 0, 0)

	bob4 = Bodies.circle(440, 380, 20, bo)
	World.add(world,bob4)

	rope4 = new rope(bob4, roof, 40, 0)

	bob5 = Bodies.circle(480, 380, 20, bo)
	World.add(world,bob5)

	rope5 = new rope(bob5, roof, 80, 0)


	Engine.run(engine);
	
  
}

function draw() {
  rectMode(CENTER);
  background("#99004d");

  rect(roof.position.x,roof.position.y,230,20);

  //call display() to show ropes here
rope1.display();
rope2.display();
rope3.display();
rope4.display();
rope5.display();
  
  //create ellipse shape for multiple bobs here
ellipse(bob1.position.x, bob1.position.y, 40, 40)
ellipse(bob2.position.x, bob2.position.y, 40, 40)
ellipse(bob3.position.x, bob3.position.y, 40, 40)
ellipse(bob4.position.x, bob4.position.y, 40, 40)
ellipse(bob5.position.x, bob5.position.y, 40, 40)
 
}

//Write keyPressed function and apply force on pressing up_arrow key on the first bob.
function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(bob1,bob1.position,{x:-50,y:-45});
}
}
