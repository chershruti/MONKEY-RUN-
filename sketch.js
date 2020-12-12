
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup
var score = 0
var survival_time = 0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  
//creating monkey 
  monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)  
  monkey.scale = 0.1
  
  //creaing ground
  ground = createSprite(400,350,900,10)
  ground.velocityX = -4
  ground.x = ground.width/2
  console.log(ground.x)
  
  //creating groups for banana and obstacle
  //fruitgroup = newGroup();
  //obstacleGroup = newGroup();
  
  
}


function draw() {
  background("white")
  
  
  if(keyDown("space")){
    monkey.velocityY = -5
  }
  
  //gravity
  monkey.velocityY = monkey.velocityY + 0.08
    
  //resetting of ground
  if (ground.x < 0){
      ground.x = ground.width/2;
    }
  
  //for monkey to collide with ground
  monkey.collide(ground)
  
  //calling reward and obstacle function in draw
  fruits();
  stone();
  
  //score
  text("score:"+score,350,10)
  
  //survival time
  survival_time = Math.ceil(frameCount/frameRate())
  text("survival time:"+survival_time,150,50)
  
  drawSprites();
}

//new function for reward to shorten code lines 
function fruits(){
  if(frameCount % 80 === 0){
    banana = createSprite(600,120,10,20)
    banana.y = Math.round(random(120,200))
    banana.addImage("eating",bananaImage)
    banana.velocityX = -4
    banana.lifetime = 150
    banana.scale = 0.1
    //FoodGroup.add(banana)
  }
}

//new function for obstacle to shorten code lines 
function stone(){
  if(frameCount % 300 === 0){
    obstacle = createSprite(600,165,10,40)
    obstacle.addImage("blocking",obstacleImage)
    obstacle.scale = 0.1
    obstacle.velocityx = -6
    //obstacleGroup.add(obstacle)
    
  }
}



