class Stone{
    constructor(x,y,r){
        var options = {
             isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
    this.image = loadImage("stone.png");
    this.x=x;
    this.y=y;
    this.r=r;

    this.body=Bodies.circle(this.x,this.y,this.r/3,options)
    World.add(world,this.body)
    }
    display(){
     push()
     translate(this.body.position.x,this.body.position.y)
     rotate(this.body.angle);
     imageMode(CENTER);
        image(this.image, 0, 0,this.r/5,this.r/5);
        
     pop()
     
    }
}