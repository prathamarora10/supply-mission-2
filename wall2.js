class Wall2
{
     constructor(x,y)
     {

      var option = {
         isStatic: true
      }

        this.body = Bodies.rectangle(x,y,10,120,option);
        World.add(world,this.body);
     }
        display()
        {
            var pos = this.body.position

            rectMode(CENTER);
            rect(pos.x,pos.x,10,120);
        }
     
}