var canvas, backgroundImage;
var gameState = 0;
var playerCount;
var allPlayers;
var distance = 0;
var database;
var form, player, game;
var cars, car1, car2, car3, car4;
var gold, silver, bronze;
var finishedPlayers = 0;
var passedFinish;

function preload(){
  
  car5 = loadImage("images/car1.png");
  car6 = loadImage("images/car2.png");
  car7 = loadImage("images/car3.png");
  car8 = loadImage("images/car4.png");
  ground = loadImage("images/ground.png");
  track = loadImage("images/track.jpg");
  gold = loadImage("images/gold.png");
  silver = loadImage("images/silver.png");
  bronze = loadImage("images/bronze.png");
  

}


function setup(){
  canvas = createCanvas(displayWidth - 20, displayHeight-30);
  database = firebase.database();
  game = new Game();
  game.getState();
  game.start();



  
}


function draw(){
  background('#ACDDDE');
  if(playerCount === 4 && finishedPlayers === 0){
    game.update(1);
  }
  if(gameState === 1){
    clear();
    game.play();
  }
  if(gameState === 2 && finishedPlayers === 4){
    game.displayRanks();
  }
  if(finishedPlayers === 4){
    game.update(2);
  }
}
