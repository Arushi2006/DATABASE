var database;
var form,game,player;
var gameState=0;
var playerCount=0;
var allplayers;
var car1,car2,car3,car4,cars;
var car1Image,car2Image,car3Image,car4Image,trackImage,groundImage;

function preload()
{
    car1Image=loadImage("images/car1.png");
    car2Image=loadImage("images/car2.png");
    car3Image=loadImage("images/car3.png");
    car4Image=loadImage("images/car4.png");
    groundImage=loadImage("images/ground.png");
    trackImage=loadImage("images/track.jpg");

}

function setup()
{
    createCanvas(500,500);
    database=firebase.database();
    game=new Game();
    game.getState();
    game.start();
}

function draw()
{
    background("white");

    if(playerCount==4)
    {
        game.update(1);
    }
    if (gameState==1)
    {
        clear();
        game.play();
    }
}

