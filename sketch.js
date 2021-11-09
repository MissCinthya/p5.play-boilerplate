const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;

var engine,world;
var cuerpo;
function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;
  cuerpo=Bodies.rectangle(200,100,50,50);
 World.add(world,cuerpo); 
 console.log(cuerpo.position);
 console.log(cuerpo.position.x);
 console.log(cuerpo.position.y);
}

function draw() {
  background(0);  
rectMode(CENTER);
  rect(cuerpo.position.x,cuerpo.position.y, 50, 50);
Engine.update(engine);
 
}
