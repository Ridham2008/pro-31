class Box {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0.8,
        'friction':0.3,
        'density':1.0
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visibility = 255;
    World.add(world, this.body);
  }
  display(){
    if(this.body.speed<3){
    var pos =this.body.position;
    rectMode(CENTER);
    fill("brown");
    strokeWeight(4)
    stroke("green")
    rect(pos.x, pos.y, this.width, this.height);
    pop();
    }
    else{
      World.remove(world,this.body)
      this.visibility=this.visibility-5
    }
  }
  score(){
if(this.visibility<0&&this.visibility>-105){
score=score+1

}
  }
};
