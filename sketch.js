const Bodies = Matter.Bodies;
const World = Matter.World;
const Engine = Matter.Engine;

var myWorld, myEngine, box;
var ground;

var box1,box2,box3,box4,box5;
var pig1,pig2;
var log1,log2,log3,log4;
var bird;
var backgroundImage;

function preload(){
  backgroundImage=loadImage("sprites/bg.png");
}

function setup() {
  createCanvas(1200,400);

  myEngine = Engine.create();
  myWorld = myEngine.world;

  var option ={
    isStatic: true 
  }

 

ground=new Ground (600,390,1200,20);
box1=new Box(700,355,70,70);
box2=new Box(920,355,70,70);
box3= new Box (700,255,70,70);
box4=new Box(920,255,70,70);
box5=new Box(810,175,70,70);
pig1 = new Pig(810,355);
pig2 = new Pig(810,255);

console.log(box1.body.position.x);



bird= new Bird(50,50);

log1= new Log(810,300,300,PI/2);
log2= new Log(810,220,300,PI/2);
log3= new Log(760,135,150,PI/7);
log4= new Log(870,135,150,-PI/4);








 

}

function draw() {
  background(backgroundImage); 
  Engine.update(myEngine);
 
  


box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
ground.display();
pig1.display();
pig2.display();
log1.display();
log2.display();
log3.display();
log4.display();
bird.display();



}