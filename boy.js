class Boy {
    constructor(x, y) {
      var options = {
        isStatic:true,
        'density':1.5,
        'friction': 1.0,
        'restitution':0.5
      };
      this.body = Bodies.rectangle(x, y, 50, 50, options);
      this.width = 150;
      this.height = 50;
      this.height = height;
        this.image = loadImage("boy.png");
      World.add(world, this.body);
    };
    display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width/2, this.height/2);
        pop();
      }
  };