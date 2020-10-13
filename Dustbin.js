class Dustbin{
    constructor(x,y){
        this.x  = x;
        this.y = y;
        this.dustbinwidth = 200
        this.dustbinheight = 100
        this.dustbinwallthickness = 20
        this.angle = 0;

        this.bottomBody = Bodies.rectangle(this.x,this.y,this.dustbinwidth,this.dustbinwallthickness,{isStatic : true});
        
        this.leftWallBody = Bodies.rectangle(this.x-this.dustbinwidth/2,this.y-this.dustbinheight/2,this.dustbinwallthickness,this.dustbinheight,{isStatic : true});
        
        Matter.Body.setAngle(this.leftWallBody,this.angle);
        
        this.rightWallBody = Bodies.rectangle(this.x+this.dustbinwidth/2,this.y-this.dustbinheight/2,this.dustbinheight,this.dustbinwallthickness,{isStatic:true});
        Matter.Body.setAngle(this.rightWallBody, -1*this.angle);

    }

    display(){
        var posBottom = this.bottomBody.position;
        var posLeft = this.leftWallBody.position;
        var posRight = this.rightWallBody.position;

        push();
        translate(posLeft.x,posLeft.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(this.angle);
        rect(0,0,this.dustbinwallthickness,this.dustbinheight);
        pop();
        
        push();
        translate(posRight.x,posRight.y);
        rectMode(CENTER);
        angleMode(RADIANS);
        fill(255);
        stroke(255);
        rotate(-1*this.angle);
        rect(0,0,this.dustbinwallthickness,this.dustbinheight);
        pop();


        push();
        //alert(posBottom.x+","+posBottom.y)
        translate(posBottom.x,posBottom.y)
        rectMode(CENTER);
        fill(255);
        angleMode(RADIANS);
        rect(0,0,this.dustbinwidth,this.dustbinwallthickness);
        pop()

        

    }
}