//constraint... engine pulls all rest coaches.
// ability to create rigid bodies and assign physical properties
//like mass, area, density..


const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg,platform;
var slingshot;
var ball1,ball2,ball3,ball4,ball5,ball6;
var chain1,chain2,chain3,chain4,chain5,chian6;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    
}

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
    //platform = new Ground(150, 305, 330, 170);
    
    log1 = new Log(600,50,800,PI/2);
    ball1 = new Ball(100,50);
    chain1 = new SlingShot(ball1.body,{x:400, y:50});

    ball2 =  new Ball(480,350);
    chain2 = new SlingShot(ball2.body,{x:480,y:50});

    ball3 = new Ball(560,350);
    chain3 = new SlingShot(ball3.body,{x:560,y:50});

    ball4 = new Ball(640,350);
    chain4 = new SlingShot(ball4.body,{x:640,y:50});

    ball5 = new Ball(720,350);
    chain5 = new SlingShot(ball5.body,{x:720,y:50});

    ball6 = new Ball(800,350);
    chain6 = new SlingShot(ball6.body,{x:800,y:50});
    
    console.log(ball1);
    
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    push();
    textSize(20);
    text("NEWTON'S CRADLE",500,500);
    pop();

    ground.display();

    chain1.display();
    ball1.display();

    chain2.display();
    ball2.display();
    
    chain3.display();
    ball3.display();

    chain4.display();
    ball4.display();

    chain5.display();
    ball5.display();

    chain6.display();
    ball6.display();
    
    log1.display();
}
