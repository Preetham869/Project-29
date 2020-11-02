class Polygon{
    constructor(x, y,r) {
        var options = {
            'isStatic': true,
            'restitution':0.8,
            'friction':1.0,
            'density':1.0
        }
        this.x = x;
        this.y = y;
        this.r = r       
        this.image = loadImage("Hexagon.png");
        this.body = Bodies.circle(this.x, this.y,(this.r - 20)/2,options);
        World.add(world, this.body);
      }
      display(){
       
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image,this.x, this.y,this.r,this.r);
        pop();
      }
}