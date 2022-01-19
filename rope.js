class rope{
	constructor(body1, body2, pointA, pointB)
	{
		this.pointA = pointA
		this.pointB = pointB
		
var options = {
	bodyA: body1, 
	bodyB: body2,
	pointB: {x:pointA, y:pointB}
}

	//create rope constraint here
this.rope = Constraint.create(options)
World.add (world, this.rope)
	}


    //create display() here 
display() {
line(this.rope.bodyA.position.x, this.rope.bodyA.position.y, this.rope.bodyB.position.x + this.pointA, this.rope.bodyB.position.y + this.pointB)
}
}