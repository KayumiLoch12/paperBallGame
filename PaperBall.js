class PaperBall{
    
    constructor(x,y,r){

var options = {
    isStatic: false,
    restitution:0.3,
    friction: 0.5,
    density:1.2 }

    this.body = Bodies.circle(x,y,r, options);
    this.x = x; 
    this.y = y;
    this.r = r;
    World.add(world, this.body) 
}
display()
{

    var paperBallpos = this.body.position;

push()
translate(paperBallpos.x, paperBallpos.y);
rectMode(CENTER) 
strokeWeight(3);
fill("pink")
ellipse(0,0,2*this.r, 2* this.r);
 pop() 
} 
}
