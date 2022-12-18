class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }
  
  disp(){
    var p = this.body.position;
    push();
    rectMode(CENTER);
    fill("red");
    translate(p.x, p.y);
    rotate(angle);
    rect(0, 0, this.w, this.h);
    pop();
    angle = angle + 0.1;
  }
   
}
