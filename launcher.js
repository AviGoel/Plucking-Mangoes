class Launcher{
    constructor(bodyA, bodyB){
        var options = {
            bodyA: bodyA,
            bodyB: bodyB,
            stiffness: 0.004,
            length: 3
        }
       this.launcher=Constraint.create(options);
        World.add(world, this.launcher);
    }
  
    display(){
        if(this.launcher.bodyA){
            var pointA = this.launcher.bodyA.position;
            var pointB = this.launcher.bodyB.position;
            strokeWeight(4);
            line(pointA.x-50, pointA.y-75, pointB.x, pointB.y);
        }
    }
    fly(){
        this.launcher.bodyA = null;
    }
    attach(){
         this.launcher.bodyA=body;
    }
}
    