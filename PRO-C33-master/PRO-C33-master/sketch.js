var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

  var gameState = "start";
 
var particles = [];
var plinkos = [];
var divisions=[];
var particle;
var divisionHeight=300;
var score =0;
var turn = 0;
function setup() {
  createCanvas(800, 800);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,75));  
    }

    for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,175));
    }

     for (var j = 75; j <=width; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,275));
    }

     for (var j = 50; j <=width-10; j=j+50) 
    {
    
       plinkos.push(new Plinko(j,375));
    }

    

    
}
 


function draw() {
  background("black");
  textSize(20)
  fill("white");
  text("Score : "+score,20,30);
  text(mouseX+" "+mouseY,mouseX,mouseY);
  text("500",20,537);
  text("500",105,537);
  text("500",185,537);
  text("500",265,537);
  text("100",345,537);
  text("100",425,537);
  text("100",505,537);
  text("200",585,537);
  text("200",665,537);
  text("200",745,537);
  Engine.update(engine);
 
  
   for (var i = 0; i < plinkos.length; i++) {
     
     plinkos[i].display();
     
   }
   /*if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var j = 0; j < particles.length; j++) {
   
     particles[j].display();
   }*/
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();

   }

   if(turn == 5){
     gameState="end"
   }
   if(particle){
     particle.display();

     if(particle.body.position.y > 760){
       if(particle.body.position.x < 300){
         score=score+500;
         particle=null
       }

     }
   }
}

function mousePressed(){
  if(gameState !== "end"){
    turn++;
    particle=new Particle(mouseX, 10,10,10);
  }
}