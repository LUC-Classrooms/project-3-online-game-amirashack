function Player(tempX, tempY) {
  // properties
  this.x = tempX;
  this.y = tempY;
  this.diam = 50;
  this.angle = 0;

  this.display = function () {
    push(); // create a drawing layer
    translate(this.x, this.y); // move origin point
    rotate(this.angle); // player can rotate

    fill(139, 69, 19); // black
    noStroke();
    /** calculate points on a triangle based on a unit circle. You could use this method to draw more complex polygons that would fit inside a circle centered on (this.x, this.y)
     * For any point around the circle, x = the cosine of the angle in radians from 0 to TWO_PI, and y = the sine of that angle. an angle of 0 is the right side of the circle, PI is the left side. 
     * The points generated this way are relative to the coordinate point (0,0). 
     * The translate() function (above, line 10) takes care of moving it on the canvas.
     * 
    */
    
    
    beginShape();
    vertex(-this.diam / 2, -this.diam / 4); // Top left
    vertex(this.diam / 2, -this.diam / 4); // Top right
    vertex(this.diam / 4, this.diam / 2); // Bottom right
    vertex(-this.diam / 4, this.diam / 2); // Bottom left
    endShape(CLOSE);

    pop();

  }


  this.move = function () {
//folow the mouse for now
    this.x = mouseX;
    this.y = mouseY;

  }
}