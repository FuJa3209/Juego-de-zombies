var back;
var player;
var playerImage1;
var playerImage2;
var zombie;
var zombieImage;
var zombieGroup;
var heart1, heart2, heart3;
var heart1Image, heart2Image, heart3Image; 


function preload(){
 playerImage1 = loadImage("assets/shooter_2.png");
 playerImage2 = loadImage("assets/shooter_3.png");
 back = loadImage("assets/bg.jpeg"); 
 zombieImage = loadImage("assets/zombie.png");
 heart1Image = loadImage("assets/heart_1.png");
 heart2Image = loadImage("assets/heart_2.png");
 heart3Image = loadImage("assets/heart_3.png");

}

function setup() {

  
  createCanvas(windowWidth,windowHeight);

 player = createSprite(windowWidth-1150, windowHeight -200);
 player.addImage(playerImage1);
 player.scale=0.30;
 player.setCollider("rectangle", 0,0,200,500);
 player.debug = true;


 
 heart1 = createSprite(windowWidth-1150,40);
 heart1.addImage(heart1Image);

 heart2 = createSprite(windowWidth-1150,40);
 heart2.addImage = (heart2Image);

 heart3 = createSprite(windowWidth-1150,40);
 heart3.addImage = (heart3Image);

}

function draw() {
  background(back); 
if(keyDown("UP")){
  player.y -= 5
  }
if(keyDown("DOWN")){
  player.y += 5
}
if(keyDown("SPACE")){
  player.addImage(playerImage2);
}
if(keyWentUp("SPACE")){
  player.addImage(playerImage1);
}

if(zombieGroup.isTouching(player)){

  for(var i = 0; i < zombieGroup.length; i ++ ){

  if (zombieGroup [i].isTouching (player) ){

    zombieGroup[i].destroy();

  }

  }

  
  



}

DeadHeads();
drawSprites();

}
function DeadHeads(){
  if (frameCount % 60 == 0){

    zombie = createSprite (1250,random(400,600));
    zombie.addImage(zombieImage);
    zombie.scale = 0.15;
    zombie.debug = true;
    zombie.velocityX = -8;
    zombie.lifetime = 345;
    zombie.setCollider("rectangle", 0,0,400,1000);
    zombieGroup.add(zombie);
}

  }
 









