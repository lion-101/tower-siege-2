class Ground {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(450,390,900,20,options);
      World.add(world, this.body);
    }
    display(){
      noStroke();
      fill(188,67,67);
      rectMode(CENTER);
      rect(this.ground.position.x,this.ground.position.y,900,20);
    }
  };