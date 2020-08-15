const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint=Matter.Constraint;
var engine, world
var rock
var ground
var slingshot
function setup() {
  createCanvas(800, 400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine)
  rock = createSprite(100,200,25,25);
  ground = new Ground();
  mouseDragged();
  mousereleased();


  topple = new Topple(200, 250, 10, 25);
  topple1 = new Topple(240, 250, 10, 25);
  topple2 = new Topple(280, 250, 10, 25);
  topple3 = new Topple(320, 250, 10, 25);
  topple4 = new Topple(360, 250, 10, 25);
  topple5 = new Topple(220, 225, 10, 25);
  topple6 = new Topple(260, 225, 10, 25);
  topple7 = new Topple(300, 225, 10, 25);
  topple8 = new Topple(340,225,10,25);
  topple9 = new Topple(240, 200, 10, 25);
  topple10 = new Topple(280, 200, 10, 25);
  topple11 = new Topple(320, 200, 10, 25);

  slingShot = new SlingShot(this.rock,{x:100,y:200})
}
function draw() {
  background(255, 255, 255);
  strokeWeight(2)
  stroke(15)
  //fill(skyblue)
  topple.display();
  topple1.display();
  topple2.display();
  topple3.display();
  topple4.display();
  topple5.display();
  topple6.display();
  topple7.display();
  topple8.display();
  topple9.display();
  topple10.display();
  topple11.display();
  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(this.rock,{x:mouseX,y:mouseY});
}
function mousereleased(){
  slingshot.fly();
}