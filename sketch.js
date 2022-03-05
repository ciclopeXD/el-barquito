
var sea,ship;
var seaImg,shipImg;
var pez1,pez2,pez3;
function preload(){ 
imagenPez1 = loadImage("pez1.png");
 
imagenPez2 = loadImage("pez2.png");

imagenPez3 = loadImage("pez3.png");

  shipImg1 = loadAnimation("ship-1.png","ship-2.png","ship-1.png","ship-2.png");
  
  seaImg = loadImage("sea.png");
}

function setup(){
  createCanvas(400,400);
  background("blue");

  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  sea.scale=0.3;

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  ship.scale =0.25;

pez1=createSprite(400,380,10,10);
pez1.addImage("pez1",imagenPez1);
pez1.scale=0.019;
pez1.velocityX=-3

pez2=createSprite(400,355,10,10);
pez2.addImage("pez2",imagenPez2);
pez2.scale=0.05;
pez2.velocityX=-3

pez3=createSprite(0,320,10,10);
pez3.addImage("pez3",imagenPez3);
pez3.scale=0.03;
pez3.velocityX=3
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  if(sea.x < 0){
    sea.x = sea.width/8;
  }

 
  drawSprites();
}
