class Form
{
  constructor()
  {
    this.title=createElement('h1');
    this.title.html("Car Race");
    this.input=createInput("name");
    this.button=createButton('play');
    this.greeting=createElement('h3');
    this.reset=createButton('Reset');

  }

  hide()
  {

    this.input.hide();
    this.button.hide();
    this.greeting.hide();

  }
display()
{
    this.title.position(390,100);
    this.input.position(400,180);
    this.button.position(400,200);
    this.reset.position(450,30);

    this.button.mousePressed(()=>{
        this.input.hide();
        this.button.hide();
         player.name=this.input.value();
         playerCount=playerCount+1;
         player.index=playerCount;
         player.update();
         player.updatecount(playerCount);
        this.greeting.html("Hello!"+player.name);
        this.greeting.position(400,250);
    })

    this.reset.mousePressed(()=>{
      player.updatecount(0);
      game.update(0);
    })
    
}
}