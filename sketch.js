var stone,boy,tree;
var mango1,mango2,mango3,mango4,mango5;
var launcher;
var ground;
var invisibleBlock;
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
   stone=new Stone(200,550,400);
   boy=new Boy(200,575);
   tree=new Tree(600,350,400,700);
   mango1=new Mango(500,250,200);
   mango2=new Mango(650,250,200);
   mango3=new Mango(750,250,200);
   mango4=new Mango(650,150,200);
   mango5=new Mango(750,175,200);
   ground=new Ground(400,720,800,20);
   launcher = new Launcher(boy.body,stone.body);
   
  
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  stone.display();
  boy.display();
  tree.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  launcher.display();
  detectollision(stone,mango1);
  detectollision(stone,mango2);
  detectollision(stone,mango3);
  detectollision(stone,mango4);
  detectollision(stone,mango5);
  drawSprites();
 
}
function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  launcher.fly();
}

function detectollision(Lstone,Lmango){
  mangoBodyPosition=Lmango.body.position
  stoneBodyPosition=Lstone.body.position

  var distance=dist(stoneBodyPosition.x,stoneBodyPosition.y,
    mangoBodyPosition.x,mangoBodyPosition.y)
    if(distance<=Lmango.r/3+Lstone.r/3){
      Matter.Body.setStatic(Lmango.body,false);
    }
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:235,y:420});
    launcher.attach(stone.body);
  }
}