class Player{

    constructor(ctx , timer, pipeManager)
    {
      this.position = new Vec2(768/2,1024/2);
      this.sprite = new Sprite("assets/bluebird-upflap.png", 0, 0, 34, 24);
      this.ctx = ctx;
      this.playerState = "starting"; 
      this.timer = timer;
      this.pipeManager =pipeManager;

      this.previousPlayerPositionY = this.position.y
      this.distanceTransverdUpwards = 0;
      this.angle = 0;

      this.width  = 34;
      this.height = 24;
    }


    draw()
    {   

      const ROTATE_VELOCITY = 300;
      const MAX_ANGLE = 90;
      
      if(this.playerState == "up"){
        this.angle = -25;
      }

      else if(this.playerState == "drop"){
        this.angle += ROTATE_VELOCITY * this.timer.deltaTimeInSeconds;

        if(this.angle > MAX_ANGLE){
          this.angle = MAX_ANGLE;
        }
      }


        this.ctx.translate(this.position.x + this.width, this.position.y + this.height);
        this.ctx.rotate(this.angle* Math.PI / 180);

        this.sprite.draw(this.ctx, -this.width , -this.height, this.width*2, this.height*2);

        this.ctx.setTransform(1, 0, 0, 1, 0, 0);

    }

    update()
    {       
      if(this.playerState != "dead"){
        const UP_VLOCITY = 400;
        const MAX_UPWARDS_DISTANCE = 120;
        const DROP_VELOCITY = 500.0;

        if(this.playerState == "up"){

          this.position.y -= UP_VLOCITY * this.timer.deltaTimeInSeconds;
          this.distanceTransverdUpwards += this.previousPlayerPositionY - this.position.y;


          if(this.distanceTransverdUpwards >= MAX_UPWARDS_DISTANCE){
            this.playerState = "drop";
            this.distanceTransverdUpwards = 0;
          }
        }

        if(this.playerState == "drop"){
          this.position.y += DROP_VELOCITY * this.timer.deltaTimeInSeconds;
          console.log("spada");
        }
        this.previousPlayerPositionY =this.position.y;
      }
    }

    up(){
      if(this.playerState == "starting"){
        this.pipeManager.start();
      }
      if(this.playerState != "dead"){
        this.playerState = "up";
      }
    }
  

}