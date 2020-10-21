var hypnoticBall, database;
var position;
var allPlayers
var gameState=0,playerCount=0;
var form,player,game;
var car1,car2,car3,car4,cars;

function preload(){
  car1image=loadImage("images/car1.png")
  car2image=loadImage("images/car2.png")
  car3image=loadImage("images/car3.png")
  car4image=loadImage("images/car4.png")
  groundimage=loadImage("images/ground.png")
  trackimage=loadImage("images/track.jpg")
}

function setup(){
  database = firebase.database();
  console.log(database);
  createCanvas(displayWidth-20,displayHeight-130);
 game=new Game()
 game.getState()
 game.start()
}

function draw(){
  if(playerCount==4){
    game.updateState(1)
  }
  if(gameState===1){
    game.play()
  }
  if(gameState==2){
    text("player rank : "+player.rank,displayWidth/2-100,displayHeight-allPlayers[plr].distance-100)
  }
}