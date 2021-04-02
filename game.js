class Game {
constructor(){

}

getState(){
var gameStateRef = database.ref('gameState');
gameStateRef.on("value",function(data){
gameState = data.val();
}
);
}

update(state){
database.ref('/').update({
gameState:state
}
);
}

async start(){
// if gameState is 0 then players can enter till 4 players 
if(gameState === 0){
player = new Player();
var playerCountRef = await database.ref('playerCount').once("value");
if(playerCountRef.exists()){
playerCount = playerCountRef.val();
player.getCount();
}


// display form class in start function
form = new Form();
form.display();
}

// displaying baskets
basket1 = createSprite(200,900);
basket1.addImage("b1",bask_img);
basket2 = createSprite(400,900);
basket2.addImage("b2",bask2_img);
basket3 = createSprite(600,900);
basket3.addImage("b3",bask3_img);
basket4 = createSprite(800,900);
//basket4.addImage("b4",bask4_img);
baskets = [basket1,basket2,basket3,basket4];
}

play(){
//hide form class
form.hide();

Player.getPlayerInfo();
if(allPlayers !== undefined){
//index of array
var index = 0;

// x & y position of the baskets
var x = 200;
var y = 900;

for(var plr in allPlayers){
// add 1 to index after every loop
index = index + 1;

if(index = player.index){
stroke(10);
fill("red");
ellipse(x,y,55,55);
baskets[index - 1].shapeColor = "red";
//camera.position.x = mouse.x;
//camera.position.y = 900;
}
}
}
drawSprites();
}


}
