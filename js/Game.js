class Game {
  constructor(){}
  
  gameStart(){
   form.hidden();
   textSize(30);
   text("GAME START!",120,70);
   Player.getPlayerInfo();
   if(allPlayers!==undefined){
    var displayPosition = 130;
     for(var plr in allPlayers ){
       if(plr === "player"+player.index){
        fill("cyan");
       }
       else{
         fill("red");
       }
       
       displayPosition+=20;
       textSize(20);
       text(allPlayers[plr].name+": "+allPlayers[plr].distance,120,displayPosition);
     }
   }
   if(keyDown(UP_ARROW) && player.index !== null){
     player.distance+=50;
     player.update();
   }
   }

  getState(){
    var gameStateRef  = database.ref('gameState');
    gameStateRef.on("value",function(data){
       gameState = data.val();
    })
   
  }

  update(state){
    database.ref('/').update({
      gameState: state
    });
  }

  start(){
    if(gameState === 0){
      player = new Player();
      player.getCount();
      form = new Form()
      form.display();
    }
  }
}
