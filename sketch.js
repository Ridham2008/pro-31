const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var score = 0
function setup() {
  createCanvas(1500,400);

  engine = Engine.create();
    world = engine.world;

  
    stone = new Stone(100,350,20)

    sling = new Slingshot(stone.body,{x:100,y:350})

    stand1 = new Ground(500,350,300,10);
    
    box1 = new Box(530,340,50,50)
    box2 = new Box(496,340,50,50)
    box3 = new Box(470,340,50,50)
    box4 = new Box(440,340,50,50)
    box5 = new Box(560,340,50,50)
    
    
    box6 = new Box(470,330,50,50)
    box7 = new Box(495,330,50,50)
    box8 = new Box(530,330,50,50)

    box9 = new Box(495,320,50,50)




}

function draw() {
  background(255,255,255);  

  text("SCORE:"+score,500,50)
  Engine.update(engine);


  stand1.display()
  box1.display()
  box2.display()
  box3.display()
  box4.display()
  box5.display()
  box6.display()
  box7.display()
  box8.display()
  box9.display()
  stone.display()
  sling.display()

  box1.score()
  box2.score()
  box3.score()
  box4.score()
  box5.score()
  box6.score()
  box7.score()
  box8.score()
  box9.score()
}
function mouseDragged() {
  Matter.Body.setPosition(stone.body, {x:mouseX, y:mouseY})
 }
 
 function mouseReleased() {
    sling.fly();
 }
    function keyPressed() {
      if (keyCode === 32) { sling.attach(stone.body); 
   } 
 
 }

