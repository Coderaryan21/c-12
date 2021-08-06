var garden,rabbit, apple, leafImg;
var gardenImg,rabbitImg, appleImg;

function preload(){
        gardenImg = loadImage("garden.png");
        rabbitImg = loadImage("rabbit.png");
        appleImg = loadImage("apple.png")
        leafImg = loadImage("orangeLeaf.png")
}

function setup(){
        
        createCanvas(400,400);
        garden=createSprite(200,200);
        garden.addImage(gardenImg);

        rabbit = createSprite(180,340,30,30);
        rabbit.scale =0.09;
        rabbit.addImage(rabbitImg);
}

function spawnApple(){
 
        apple = createSprite(random(50, 350), 40, 10, 10)
        apple.addImage(appleImg)
        apple.velocityY = 2
        apple.scale=0.07
        apple.lifetime = 130
  
}
function leafSpawn(){
        leaf = createSprite(random(50, 350)), 40, 10, 10
        leaf.velocityY = 2
        leaf.addImage(leafImg)
        leaf.scale = 0.1
        leaf.lifetime = 130
      
}

function draw() {
        background(0);
        var rand = Math.round(random(1, 2))
        edges= createEdgeSprites();
        rabbit.collide(edges);
      rabbit.x = mouseX
      if (frameCount %80 == 0){
            if(rand == 1){
              spawnApple()
            }
            else{
              leafSpawn()
            }
      }
      
        drawSprites();
}