class Player{

    constructor(ctx , timer)
    {
      this.position = new Vec2(768/2,1024/2);
      this.sprite = new Sprite("assets/bluebird-upflap.png", 0, 0, 34, 24);
      this.ctx = ctx;
      this.playerState = "starting"; 
      this.timer = timer;

      this.previousPlayerPositionY = this.position.y
      this.distanceTransverdUpwards = 0;
      this.angle = 0;
    }


    draw()
    {   

      const ROTATE_VELOCITY = 300;
      const MAX_ANGLE = 90;
      const HALF_WIDTH  = 34;
      const HALF_HEIGHT = 24;
      
      if(this.playerState == "up"){
        this.angle = -25;
        this.ctx.translate(this.position.x + HALF_WIDTH , this.position.y + HALF_HEIGHT);
        this.ctx.rotate( this.angle * Math.PI / 180);

        this.sprite.draw(this.ctx, -HALF_WIDTH , -HALF_HEIGHT, 34*2, 24*2);

        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      }

      else if(this.playerState == "drop"){

        this.angle += ROTATE_VELOCITY * this.timer.deltaTimeInSeconds;

        if(this.angle > MAX_ANGLE){
          this.angle = MAX_ANGLE;
        }

        this.ctx.translate(this.position.x + HALF_WIDTH, this.position.y + HALF_HEIGHT);
        this.ctx.rotate(this.angle* Math.PI / 180);

        this.sprite.draw(this.ctx, -HALF_WIDTH , -HALF_HEIGHT, HALF_WIDTH*2, HALF_HEIGHT*2);

        this.ctx.setTransform(1, 0, 0, 1, 0, 0);
      }

      else{
        this.sprite.draw(this.ctx, this.position.x, this.position.y, HALF_WIDTH*2, HALF_HEIGHT*2);
      }

    }

    update()
    {     
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
      }
      this.previousPlayerPositionY =this.position.y;
    }

    up(){
      this.playerState = "up";
    }
}