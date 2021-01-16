const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9;
var block10,block11,block12, block13, block14;
var player;
var ground1, ground2, ground3;

var block15, block16, block17, block18, block19, block20, block21;
var block22;
var sling;
var player;

var ball;
var img;

function preload(){
  polygonImg = loadImage("polygon.png");

}

function setup() {
  createCanvas(800,600);
  engine = Engine.create();
  world = engine.world;

  ground1 = new Ground(400, 590, 800, 20);
  ground2 = new Ground(150,400,250,10);
  ground3 = new Ground(600,300,200,10);

  block1 = new Block(55,380,30,40);
  block2 = new Block(85,380,30,40);
  block3 = new Block(115,380,30,40);
  block4 = new Block(145,380,30,40);
  block5 = new Block(175,380,30,40);
  block6 = new Block(205,380,30,40);
  block7 = new Block(235,380,30,40);
  block8 = new Block(85,335,30,40);
  block9 = new Block(115,335,30,40);
  bolck10 = new Block(145,335,30,40);
  block11 = new Block(175,335,30,40);
  block12 = new Block(205,335,30,40);
  block13 = new Block(115,295,30,40);
  block14 = new Block(145,295,30,40);
  block15 = new Block(175,295,30,40);
  block16 = new Block(145,255,30,40);
  block17 = new Block(535,280,30,40);
  block18 = new Block(565,280,30,40);
  block19 = new Block(595,280,30,40);
  block20 = new Block(625,280,30,40);
  block21 = new Block(655,280,30,40);
  block22 = new Block(565,235,30,40);
  block23 = new Block(595,235,30,40);
  block24 = new Block(625,235,30,40);
  block25 = new Block(595,195,30,40);

  player = new Player(50,600,30,30);

  ball = Bodies.circle(50,200,20);
  World.add(world,ball);

    sling = new Chain(this.ball,{x:50, y:150});
}

function draw() {
  background("grey");
  Engine.update(engine);

  fill(rgb(135, 205, 236));
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  fill("lightBlue");
  block8.display();
  block9.display();
  bolck10.display();
  block11.display();
  block12.display();

  fill("lightPink");
  block13.display();
  block14.display();
  block15.display();

  fill(rgb(47, 48, 48));
  block16.display();

  fill(rgb(135, 205, 236));
  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  fill("lightGreen");
  block22.display();
  block23.display();
  block24.display();
 
  fill("lime");
  block25.display();

  ground1.display();
  ground2.display();
  ground3.display();

  imageMode(CENTER);
  image(polygonImg,ball.position.x,ball.position.y,60,60);

  sling.display();

  textSize(20);
  text("Drag the line and release to hit the crazy boxes",175,250);
}

function mouseDragged(){
  Matter.Body.setPosition(this.ball, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  sling.fly();
}

function keyPressed(){
	if(keyCode === 32)
	{
		Matter.Body.setPosition(player.body,{x:235, y:420})
		chain.attach(player.body);
	}
}