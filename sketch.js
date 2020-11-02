const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9;
var polygon;
var launchingForce = 100;

function setup() {
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;

  block1  = new Box(330,235,30,40)
  block2 = new Box(360,235,30,40)
  block3 = new Box(390,235,30,40)
  block4 = new Box(420,235,30,40)
  block5 = new Box(450,235,30,40)

  block6 = new Box(360,195,30,40)
  block7 = new Box(390,195,30,40)
  block8 = new Box(420,195,30,40)
 
  block9 = new Box(390,155,30,40)
  
  polygon = new Polygon(50,200,20);
  launcherObject=new launcher(polygon.body,{x:235,y:420})

	Engine.run(engine);

}

function draw() {
  background(255,255,255);  


 
block1.display(); 
block2.display(); 
block3.display(); 
block4.display();  
block5.display(); 

block6.display(); 
block7.display();  
block8.display(); 

block9.display();  

polygon.display();
launcherObject.display();
 

}
function mouseDragged(){
  Matter.Body.setPosition(polygon.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
 polygon.fly();
}

function keyPressed(){
  if(keyCode === 32){
Matter.Body.setPosition(polygon.body, {x:235, y:420}) 
// launcherObject.attach(polygon.body);
  }
}


