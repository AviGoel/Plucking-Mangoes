class Mango{
    constructor(x,y,r){
        var options = {
             isStatic:true,
            restitution:0,
            friction:1
        }
    this.image = loadImage("mango.png");
    this.x=x;
    this.y=y;
    this.r=r;

    this.body=Bodies.circle(this.x,this.y,this.r/2,options)
    World.add(world,this.body)
    }
    display(){
     push()
     translate(this.body.position.x,this.body.position.y)
     rotate(this.body.angle);
     imageMode(CENTER);
        image(this.image, 0, 0,this.r/3,this.r/3);
        
     pop()
     
    }
}