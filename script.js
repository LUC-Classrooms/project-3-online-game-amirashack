/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name:
 * 
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */
var gameState = "splash";
var player1; 
var testBox;
var dropTimer;
var presents = new Array(0);

function setup() {

  createCanvas(600, 400);

  player1 = new Player(width / 2, height - 50);

  dropTimer = new Timer(1000);
  
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

  if(dropTimer.isFinished()) {
    let p = new Box(random(width), -40);
    presents.push(p);
    dropTimer.start();
  }

  for(let i = 0; i < presents.length; i++) {
    presents[i].display();
    presents[i].move();
    presents[i].spin();

    if(presents[i].y > height) {
      presents.splice(i, 1);
    }
  
    let d = dist(presents[i].x, presents[i].y, player1.x, player1.y);
    if(d < 50) {
      presents.splice(i, 1);
    }
  }
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
    dropTimer.start();
    
  
  
  

  console.log(gameState);

}
  