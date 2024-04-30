/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name:
 * 
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */
var gameState = "splash";
var player1; 
var testBox;
var gameTimer;

function setup() {

  createCanvas(600, 400);

  player1 = new Player(width / 2, height * 4/5);

  gameTimer = new Timer(5000); // 5 second timer
  
  textBox = new Box(width / 2, height / 3);

}

function draw() {
  background(200);
  /* un-comment each line to see it work */
  //splash(); // call the splash screen function (below)
  //play(); // call the play screen function (below)
  //gameOver(); // call the gameOver screen function (below)
  switch (gameState) {
    case "splash" :
      splash();
      break;
    case "play" :
      play();
      break;
    case "gameOver" :
      gameOver();
      break;
    default :
      console.log("no match found - check your mousePressed() function!");
  }

  if(gameState == "splash") {
    splash();
  } else if(gameState == "play") {
    play();
  }

}

function splash() {
  // this is what you would see when the game starts
  
  background(200);
  textAlign(CENTER);
  textSize(16);
  text("Let's Play a Game!", width / 2, height / 2);
  textSize(12);
  text("(click the mouse to continue)", width / 2, height / 2 + 30);
  
  testBox.display();
  testBox.spin();
}

function play() {
  // this is what you see when the game is running 
  background(0, 200, 0);
  fill(0, 0, 200)
  textAlign(CENTER);
  textSize(16);
  text("This is where the Game happens", width / 2, height / 2);
  player1.display();


  if(gameTimer.isFinished()) {
   gameState = "gameOver"
  }

  textAlign(LEFT);
  text("elasped time: " + gameTimer.elaspedTime, 40, 100); //show elasped time

}

function gameOver() {
  // this is what you see when the game ends
  background(0);
  fill(255, 0, 0)
  textAlign(CENTER);
  textSize(16);
  text("Game Over!", width / 2, height / 2);
}

function mousePressed() {
  if(gameState == "splash") {
    gameState == "play";
    gameTimer.start();
    gameTimer.start();
    dropTimer.start();
    presents = new Array(0);
    player1 = new Player (width/2, height * 4/5);
    gameTimer.start(); 
    dropTimer.start();
    presents = new Array(0);
    player1 = new Player (width/2, height * 4/5);
  }
  else if(gameState == "play") {
    gameState == "gameOver";
  }
  else if(gameState == "gameOver") {
    gameState = "splash"
  }
    gameTimer.start();
    
    
  
  
 
  
  console.log(gameState);

}
  

function keyPressed() {
  switch(keyCode) {
    case UP_ARROW :
      player1.y -= 30
      player1.angle = 0;
      if(player1.y < 0) player1.y = height; //wrap to bottom
    break;
    case DOWN_ARROW :
      player1.y += 30
      player1.angle = PI ;
      if(player1.y > height) player1.y = 0; //wrap to top
      break;
  }
}