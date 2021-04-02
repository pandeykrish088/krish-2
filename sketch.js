var canvas,backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form,player,game;
var bg = "forest.jpeg";
var bg = "forest2_img.jpg";
var baskets,basket1,basket2,basket3,basket4;
var bask_img,bask2_img,bask3_img,bask4_img,bask5_img,bask6_img,bask7_img,bask8_img;

function Preload(){
getBackgroundImage();
bask_img.loadImage("basket.png");
bask2_img.loadImage("basket-2.jpg");
bask3_img.loadImage("basket-3.jpg");
/*bask4_img.loadImage("basket-4.webp");
bask5_img.loadImage("basket-5.gif");
bask6_img.loadImage("basket-6.webp");
bask7_img.loadImage("basket-7.webp");
bask8_img.loadImage("basket-8.jpg");*/
}

function setup() {
canvas = createCanvas(1000,1000);


database = firebase.database();
game = new Game();
game.getState();
game.start();
}

function draw() {
background(255,255,255); 

if(playerCount === 4){
game.update(1);
}

if(gameState === 1){
clear();
game.play();
}
  
}

async function getBackgroundImg(){
var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
var responseJSON = await response.json();

var datetime = responseJSON.datetime;
var hour = datetime.slice(11,13);

if(hours>=6 && hours>=18){
bg = "forest.jpeg";
}
else{
bg = "forest2_img.jpg";
}
}