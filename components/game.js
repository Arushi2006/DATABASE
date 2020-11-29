class Game
{
  constructor()
  {
  
  }
  getState()
  {
    var gameStateref=database.ref('gameState');
    gameStateref.on("value",(data)=>{
      gameState=data.val();
    })
  }
  update(State)
  {
    database.ref('/').update({
      gameState:State
    });
  }
  async start()
  {
      if (gameState==0)
      {
          player=new Player();
          var playerCountref=await database.ref('playerCount').once("value");
          if(playerCountref.exists())
          {
            playerCount=playerCountref.val();
            player.getCount();
          }
          form=new Form();
          form.display();
      }
      car1=createSprite(100,200,50,50);
      car1.addImage("car1",car1Image);
      car2=createSprite(300,200,50,50);
      car2.addImage("car2",car2Image);
      car3=createSprite(600,200,50,50);
      car3.addImage("car3",car3Image);
      car4=createSprite(800,200,50,50);
      car4.addImage("car4",car4Image);
      cars=[car1,car2,car3,car4];
  }
  play()
  {
    form.hide();
    Player.getPlayerInfo();
    
    if(allplayers!=undefined)
      {
        background(rgb(198,135,103));
        image(trackImage,0,-displayHeight*4,width,displayHeight*5);
       var index=0;
       var x=100;
       var y;
       for(var i in allplayers)
       {
         index=index+1;
         x=x+200;
         y=displayHeight-allplayers[i].distance;
         cars[index-1].x=x;
         cars[index-1].y=y;
         
       }
       //camera.position.x=displayWidth/2;
       //camera.position.y=cars[index-1].y;
      }
      
  }
  drawSprites();
} 