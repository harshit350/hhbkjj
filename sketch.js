
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var box1,box2,box3,box4,box5,box6,box7,box8,box9,box10,box11,box12,box13,box14,box15,box16;
 var ground;
 var polygon;
var sling123;
var img
var test
var ball;
var score=0;

function preload(){


img=loadImage("123.png");
//test=loadImage("bird.png")


}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;
	ground=new Ground(390,300,350,20);
	//Create the Bodies Here.
	box1=new Box(330,235,30,40);
	box2=new Box(360,235,30,40);
	box3=new Box(390,235,30,40);
	box4=new Box(420,235,30,40);
	box5=new Box(450,235,30,40);
	box6=new Box(360,195,30,40);
	box7=new Box(390,195,30,40);
	box8=new Box(420,195,30,40);
	box9=new Box(390,155,30,40);
	box10=new Box(300,265,30,40);
	box11=new Box(330,265,30,40);
	box12=new Box(360,265,30,40);
	box13=new Box(390,265,30,40);
	box14=new Box(420,265,30,40);
	box15=new Box(450,265,30,40);
	box16=new Box(480,265,30,40);

	

	ball = Bodies.circle(50,200,20);
	World.add(world,ball);
  
	sling123 = new SlingShot(this.ball,{x:100,y:200});
  



	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("black");
  Engine.update(engine);
 
 
  
  text("Score  "+score,700,119)
  fill("grey");
 textSize(19)


box1.display();
box2.display();
box3.display();
box4.display();
box5.display();
box6.display();
box7.display();
box8.display();
box9.display();
box10.display();
box11.display();
box12.display();
box13.display();
box14.display();
box15.display();
box16.display();
sling123.display();

ground.display();



box1.score();
box2.score();
box3.score();
box4.score();
box5.score();
box6.score();
box7.score();
box8.score();
box9.score();
box10.score();
box11.score();
box12.score();
box13.score();
box14.score();
box15.score();
box16.score();



fill("brown");
  imageMode(CENTER)
  image(img ,ball.position.x,ball.position.y,40,40);





  drawSprites();
 
}


function mouseDragged(){
	Matter.Body.setPosition(this.ball,{x:mouseX,y:mouseY});
  }
  function mouseReleased(){
	sling123.fly();
  }

  function keyPressed(){
    if(keyCode === 32){
        sling123.attach(this.ball);
       
    }

    
}  