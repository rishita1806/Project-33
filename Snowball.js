class Snowball{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution:0.5,
			friction:1,
			density:0.5
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image = loadImage("snowball.png");
        this.Visiblity = 255;
		this.body = Bodies.circle(this.x, this.y, this.r, options);
        Matter.Body.scale(this.body,0.5,0.5);
		World.add(world, this.body);

	}
	display(){
        var angle = this.body.angle;
        var snowballpos = this.body.position;
        push();
        if(this.body.speed<3){	
			imageMode(CENTER);
			translate(snowballpos.x, snowballpos.y);
		    rotate(this.body.angle)
		    //ellipse(0,0,this.r)
			image(this.image, 0,0,this.r, this.r)
			pop()
        } else {
            World.remove(world, this.body);
            push();
            this.Visiblity = this.Visiblity - 5;
            tint(255,this.Visiblity);
            image(this.image, this.body.position.x, this.body.position.y, 60);
            pop();
          }
		
}
}
