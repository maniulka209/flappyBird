class Player{

    constructor(ctx , timer)
    {
      this.position = new Vec2(350,0);
      this.sprite = new Sprite("assets/bluebird-upflap.png", 0, 0, 34, 24);
      this.ctx = ctx;
      this.playerState = "start"; 
      this.timer = timer;
    }


    draw()
    {   
      this.sprite.draw(this.ctx, this.position.x, this.position.y, 34, 24);
    }

    update()
    {   
        const dropVelocity = 200.0;
    }
}