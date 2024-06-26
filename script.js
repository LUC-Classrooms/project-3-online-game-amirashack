/**
 * Project 3 versions 0-4 - 2D Web Game
 * Name:
 * 
 * Use this template to get started creating a simple 2D game for the web using P5.js. 
 */
var gameState = "splash";
var player1; 
var gameTimer;
var testBox; // a box to preview on the splash screen
var dropTimer; // regulate box drops
var presents = new Array(0); // an empty array called "presents"
var score = 0; //keep track of the points

function setup() {

  createCanvas(600, 400);

  player1 = new Player(width/2, height * 4/5);
  gameTimer = new Timer(10000); // 10 second timer
  dropTimer = new Timer(1000); 
  testBox = new Box(width/2, height/3);

}

function draw() {
  background(200);
  /* un-comment each line to see it work */
  //splash(); // call the splash screen function (below)
  //play(); // call the play screen function (below)
  //gameOver(); // call the gameOver screen function (below)
  switch(gameState) {
    case "splash":
      splash();
      break;
    case "play":
      play();
      break;
    case "gameOver":
      gameOver();
      break;
    default:
      console.log("no match found - check your mousePressed() function!");

}


  

}

function splash() {
  // this is what you would see when the game starts
  
  background(200);
  textAlign(CENTER);
  textSize(16);
  fill(0);
  text("Let's Play a Game!", width / 2, height / 2);
  textSize(12);
  text("(click the mouse to continue)", width / 2, height / 2 + 30);
  
  testBox.display();
  testBox.spin();
}

function play() {
  // this is what you see when the game is running 
  background(250, 190, 220);
  
  player1.display();

  textAlign(LEFT);
  text("Elasped time: " + gameTimer.elaspedTime, 20, 20);
  text("Score: " + score, 20, 40);



  


  if(gameTimer.isFinished()) {
   gameState = "gameOver"
  }

  if(dropTimer.isFinished()) {
    let p = new Box(random(width), -40); // new box, anywhere across the width of the canvas, but 40px above the canvas
    presents.push(p); // add object 'p' to the 'presents' Array
    dropTimer.start(); // restart timer for next drop
  }

  for(let i = 0; i < presents.length; i++) {
    presents[i].display(); // draw it on the canvas
    presents[i].move(); // make it drop
    presents[i].spin() // make it rotate

    if(presents[i].y > height){
      presents.splice(i, 1);
      score--; //take away 1 point
    }
    let d = dist(presents[i].x, presents[i].y, player1.x, player1.y);
    if(d < 50){
      presents.splice(i, 1);
      score ++; // add 1 point
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
  text("Your final score: " + score, width/2, height * 2/3);
}

function mousePressed() {
  if(gameState == "splash") {
    gameState = "play";
    gameTimer.start();
    dropTimer.start();
    score = 0; //reset score
  }
  else if(gameState == "play") {
    gameState = "gameOver";
  }
  else if(gameState == "gameOver") {
    gameState = "splash";
  }
  
    
    
    
  
  
 
  
console.log(gameState)
}
  

function keyPressed() {
  switch(keyCode) {
    case LEFT_ARROW:
      player1.x -= 30;
      if(player1.x < 0) player1.x = width;
    break;
    case RIGHT_ARROW:
      player1.x += 30;
      if(player1.x < 0) player1.x = 0;
    break;

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