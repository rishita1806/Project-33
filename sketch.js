const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var boy;
var bg;
var ground;
var launcherObj;
var launchForce = 200;
var hitball;
var sb1,sb2,sb3,sb4,sb5,sb6,sb7,sb8,sb9,sb10,sb11,sb12,sb13,sb14,sb15,sb16,sb17,sb18,sb19,sb20,sb21;
var stand;
var snow = [];
var gameState = "onHand";
var score = 0;

function preload(){
bg = loadImage("background.jpg");
boy = loadImage("boy.png");
}

function setup() {
  createCanvas(1200,600);
  engine = Engine.create();
  world = engine.world;

  sb1 = new Snowball(850,530,60);
  sb2 = new Snowball(910,530,60);
  sb3 = new Snowball(970,530,60);
  sb4 = new Snowball(1030,530,60);
  sb5 = new Snowball(1090,530,60);
  sb6 = new Snowball(1150,530,60);
  sb7 = new Snowball(870,475,60);
  sb8 = new Snowball(930,475,60);
  sb9 = new Snowball(990,475,60);
  sb10 = new Snowball(1050,475,60);
  sb11 = new Snowball(1110,475,60);
  sb12 = new Snowball(890,425,60);
  sb13 = new Snowball(950,425,60);
  sb14 = new Snowball(1010,425,60);
  sb15 = new Snowball(1070,425,60);
  sb16 = new Snowball(920,370,60);
  sb17 = new Snowball(980,370,60);
  sb18 = new Snowball(1040,370,60);
  sb19 = new Snowball(955,315,60);
  sb20 = new Snowball(1015,315,60);
  sb21 = new Snowball(985,260,60);

  stand = new Slab(1000,570,380,20);

  hitball = new Hitball(330,350,50); 
  ground = new Ground(width/2, 600, 1200, 50);
  launcherObj = new Launcher(hitball.body, {x:330,y:350});
}

function draw() {
  background(bg);  
  Engine.update(engine);

  if(frameCount % 30 === 0){
    snow.push(new Snow(random(10,1100), 10, 50));
  }
  
  for (var i = 0; i < snow.length; i++){
    snow[i].display();
  }

  ground.display();

  image(boy,5,300,520,300);

  sb1.display();
  sb2.display();
  sb3.display();
  sb4.display();
  sb5.display();
  sb6.display();
  sb7.display();
  sb8.display();
  sb9.display();
  sb10.display();
  sb11.display();
  sb12.display();
  sb13.display();
  sb14.display();
  sb15.display();
  sb16.display();
  sb17.display();
  sb18.display();
  sb19.display();
  sb20.display();
  sb21.display();

  stand.display();

  hitball.display();
  launcherObj.display();

  detectollision(hitball,sb1);
  detectollision(hitball,sb2);
  detectollision(hitball,sb3);
  detectollision(hitball,sb4);
  detectollision(hitball,sb5);
  detectollision(hitball,sb6);
  detectollision(hitball,sb7);
  detectollision(hitball,sb8);
  detectollision(hitball,sb9);
  detectollision(hitball,sb10);
  detectollision(hitball,sb11);
  detectollision(hitball,sb12);
  detectollision(hitball,sb13);
  detectollision(hitball,sb14);
  detectollision(hitball,sb15);
  detectollision(hitball,sb16);
  detectollision(hitball,sb17);
  detectollision(hitball,sb18);
  detectollision(hitball,sb19);
  detectollision(hitball,sb20);
  detectollision(hitball,sb21);

  strokeWeight(2);
  stroke("#008296");
  textSize(30)
  fill("#7BEEFF")
  textFont("Georgia Pro Semilbold");
  text("✼ Score: " + score, width-400, 50)

  textSize(30);
  fill("#7BEEFF")
  textFont("Georgia Pro Semibold");
  strokeWeight(2);
  stroke("#008296")
  text("⇢ ˗ˏˋ Press Space To Get a Second Chance to Play! ࿐ྂ",30 ,83);

  textSize(30);
  fill("#7BEEFF")
  textFont("Georgia Pro Semibold");
  strokeWeight(2);
  stroke("#008296")
  text("⇢ ˗ˏˋ Drag, Aim and Release the Ball! ࿐ྂ",30 ,53);

}

function mouseDragged(){
  if(gameState!=="launched")
  Matter.Body.setPosition(hitball.body,{x:mouseX,y:mouseY})
}

function mouseReleased(){
  launcherObj.fly();
  gameState = "launched";
}

function keyPressed(){
  if(keyCode === 32){
     launcherObj.attach(hitball.body);
     Matter.Body.setPosition(hitball.body, {x:330, y:350});
     gameState  = "onHand";
  }
}

function detectollision(lhitball,lsb){

  sbBodyPosition=lsb.body.position
  hitballBodyPosition=lhitball.body.position
  
  var distance = dist(hitballBodyPosition.x, hitballBodyPosition.y, sbBodyPosition.x, sbBodyPosition.y)
      if(distance <= lsb.r + lhitball.r)
    {
        Matter.Body.setStatic(lsb.body, false);
        score = score + 10;
    }
  
}
