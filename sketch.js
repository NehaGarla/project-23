
const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
 var box1;var box2;
 var ground1;

function setup()
{
  createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;

  box1=new Box(200,300,50,50);
box2=new Box(240,100,50,100);
 ground1=new Ground(10,390,400,20);

console.log(box2.body.angle)
}

function draw()
{
  background("purple");
Engine.update(engine);
  
box1.display();
box2.display(); 
ground1.display();

}



