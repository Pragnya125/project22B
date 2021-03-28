var starImg,bgImg;
var star, starBody;
var fairy, fairyImg, fairyImg2
var joyMusicSound

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/starImage.png");
	bgImg = loadImage("images/starNight.png");
	fairyImg = loadImage("images/fairyImage1.png");
	fairyImg2 = loadImage("images/fairyImage2.png");
	joyMusicSound = loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);
	fairy = createSprite(200,400,50,50);
	fairy.addImage(fairyImg);
	fairy.scale = 0.3;	


	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.04;


	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
  if(star.y > 345 && starBody.position.y > 345){
	  Matter.Body.setStatic(starBody,true)
  }
  

  drawSprites();

}

function keyPressed() {

	if (keyCode === DOWN_ARROW) {
		Matter.Body.setStatic(starBody,false); 
	}

	if(keyCode === LEFT_ARROW){
		fairy.x = fairy.x - 10
		playSound.joyMusicSound()
	}

	if(keyCode === RIGHT_ARROW){
		fairy.x = fairy.x + 10
		playSound.joyMusicSound();
	}
	
}
