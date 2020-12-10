class Stone {
    constructor(x, y,r) {
      var options = {
          'restitution':0.5,
          'friction':0.3,
          'density':1.0,
          isStatic:false
      }
      this.body = Bodies.circle(x, y, r,options);
      this.radius=r
      //this.image=loadImage("images/")
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("cyan");
      strokeWeight(4)
      stroke("green")
      ellipse(pos.x,pos.y,this.radius,this.radius)
     // image(this.image,pos.x, pos.y, this.radius, this.radius);
      pop();
    }
  };