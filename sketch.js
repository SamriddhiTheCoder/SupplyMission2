var helicopterIMG, helicopterSprite, packageSprite, packageIMG;
var packageBody,ground;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG = loadImage("helicopter.png")
	packageIMG = loadImage("package.png")
}

function setup() {
	createCanvas(800, 600);

	rectMode(CENTER);
	
	packageSprite = createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;
	console.log(packageSprite.width)

	helicopterSprite = createSprite(width/2, 200, 10, 10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale = 0.6;

	groundSprite = createSprite(width/2, height-35, width, 10);
	groundSprite.shapeColor = color(255);

	//box sprites
	boxSprite = createSprite(width/2, 550, 200, 20);
	boxSprite.shapeColor = color("red");
	boxSprite2 = createSprite(500, 510, 20, 100);
	boxSprite2.shapeColor = color("red");
	boxSprite3 = createSprite(300, 510, 20, 100);
	boxSprite3.shapeColor = color("red");

	engine = Engine.create();
	world = engine.world;

	packageBody = Bodies.circle(width/2 , 200 , 25, {restitution:0.8, isStatic:true});
	World.add(world, packageBody);
	
	ground = Bodies.rectangle(width/2, height-35, width, 10,{isStatic:true});
 	World.add(world, ground);

	//boxes
	box = Bodies.rectangle(width/2, 550, 200, 20, {isStatic:true});
	World.add(world, box);
	box2 = Bodies.rectangle(500, 510, 20, 100, {isStatic:true});
	World.add(world, box);
	box3 = Bodies.rectangle(300, 510, 20, 100, {isStatic:true});
	World.add(world, box);

	Engine.run(engine);
}

function draw() {

  Engine.update(engine);

  background(0);

  rectMode(CENTER);

  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;

  //displaying bodies
  rect(box.position.x, box.position.y, 200, 20);
  rect(box2.position.x, box2.position.y, 20, 100);
  rect(box3.position.x, box3.position.y, 20, 100);

  drawSprites();
}

function keyPressed() {
 if (keyCode == DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false);
  }
}