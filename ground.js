class Ground {
    constructor(x,y,w,h){
        var ground_option = {
            isStatic:true
          }
        this.body =Bodies.rectangle(x,y,w,h, ground_option);
        World.add(myWorld,this.body);  
        this.width=w;
        this.height=h;     
    }
    display(){
        var pos=this.body.position;
        rectMode(CENTER); 
        fill ("darkgreen");
        rect (pos.x,pos.y,this.width,this.height);
    }
}