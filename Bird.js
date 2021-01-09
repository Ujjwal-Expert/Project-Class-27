class Ball  {
  constructor(x,y){
    var options = {
      'restitution':1,
      'friction':0,
      'density':1,
      'frictionStatic':0,
      'frictionAir':0
  }
  this.body = Bodies.circle(x, y,40, options);
  this.image = loadImage("sprites/ball.png");
  World.add(world, this.body);
    
  }

  display() {
    //this.body.position.x = mouseX;
    //this.body.position.y = mouseY;
    //var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        //rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
  }
}
