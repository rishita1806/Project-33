class Snow {
    constructor(x, y, r) {
        var options = {
            isStatic:false,
           'restitution': 0,
            'friction': 0,
            'density':1
        }
      this.x = x;
      this.y = y;
      this.r = r; 
      this.body = Bodies.circle(this.x, this.y, this.r, options);
      this.image = loadImage("snow4.webp");
      this.Visiblity = 255;
      Matter.Body.scale(this.body,0.3,0.3);
      World.add(world, this.body);
    }
    display(){
        var angle = this.body.angle;
        var pos = this.body.position;
        push();

      if(this.body.position.y>450){
        World.remove(world, this.body);
        push();
        this.Visiblity = this.Visiblity - 5;
        tint(255,this.Visiblity);
        image(this.image, this.body.position.x, this.body.position.y, 50);
        pop();
      } else {
      imageMode(CENTER);
      translate(pos.x, pos.y);
      rotate(this.body.angle);
//    ellipse(0, 0, this.r);
      image(this.image, 0, 0, this.r, this.r);
      pop();
      }
}
}
