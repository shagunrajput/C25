class Parentclass  {
    constructor(x,y,w,h,angle){
        var bird_option = {
            restitution: 0.8,
            friction: 0.5,
            density: 1.0
          }
        this.body =Bodies.rectangle(x,y,w,h,bird_option);
        World.add(myWorld,this.body); 
        this.image = loadImage("sprites/base.png");
        this.width=w;
        this.height=h;     
    }
    display(){
        var pos=this.body.position;
        
        var angle=this.body.angle;
         push ();
         angleMode(RADIANS);
         translate (pos.x,pos.y);
         rotate (angle);
       
        imageMode (CENTER);
        image (this.image,0,0,this.width,this.height);
        
        pop ();
    }
}