class Hitball{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.5,
			friction:0.4,
			density:0.5
			}
		this.x=x;
		this.y=y;
		this.r=r;
		this.image = loadImage("snowball.png");
		this.body = Bodies.circle(this.x, this.y, this.r, options);
        Matter.Body.scale(this.body,0.5,0.5);
		World.add(world, this.body);

	}
	display()
	{
			var hitballpos=this.body.position;		
			push()
			translate(hitballpos.x, hitballpos.y);
		    rotate(this.body.angle)
			imageMode(CENTER);
		    //ellipse(0,0,this.r)
			image(this.image, 0,0,this.r, this.r)
			pop()
			
	}
}
