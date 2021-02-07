class Boy{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.04,
            length: 10
        }
        this.pointB=pointB
        this.venkat = Constraint.create(options);
        World.add(world, this.venkat);
        this.boy1=loadImage("images/boy.png")
       
    }

    display(){
      //display the connection line only when bird position is avaliable that is when the bird is not flying
        if(this.venkat.bodyA){ 
            var pointA = this.venkat.bodyA.position;
            var pointB = this.pointB;
            strokeWeight(4);
            line(pointA.x, pointA.y, pointB.x, pointB.y);
            image(this.boy1,170,290, 200,400)

        }
       
    }

//null=nothing,detach the bird from the connection to make it fly
    fly(){
      this.venkat.bodyA=null
    }
    
}