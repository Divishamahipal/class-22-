var packageBody, ground;
var helicopterIMG, helicopterSprite, packageSprite, packageIMG, groundSprite;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
 
function preload()
{
	helicopterIMG = loadImage("helicopter.png");
	packageIMG = loadImage("package.png");
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	packageSprite = createSprite(width/2, 80, 10, 10);
	packageSprite.addImage(packageIMG);
	packageSprite.scale = 0.2;

	helicopterSprite = createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG);
	helicopterSprite.scale=0.6;

	groundSprite = createSprite(width/2, height-35, width, 10);
	groundSprite.shapeColor = color(255);

	engine = Engine.create();
	world = engine.world;

    var ground_Options = {
		isStatic : true
	}
	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, ground_Options);
	World.add(world, ground);
	 
    var packageBody_Options = {
		restitution : 1
	}
	packageBody = Bodies.circle(width/2, 150, 5, packageBody_Options);
	//packageBody = Bodies.circle(width/2, 150, 5, {restitution:1,isStatic:true});
	World.add(world, packageBody);
	Engine.run(engine); 
}

function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x = packageBody.position.x;
  packageSprite.y = packageBody.position.y;
//   Engine.update(engine);
//   rect(ground.position.x, ground.position.y, 100, 20); 
//   circle(packageSprite.x, packageSprite.y, 20);
  drawSprites();
 
}

function keyPressed(){
 if (keyCode === DOWN_ARROW) {
	Matter.Body.setStatic(packageBody, false)
	
   // packageSprite = collide(groundSprite); 
	//packageSprite.velocityY = 10;
    
  }
}