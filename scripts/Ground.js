class Ground{
    constructor(posX){
      this.position = new Vec2(posX,850);
      this.sprite = new Sprite( "assets/base.png" , 0 , 0 , 336 ,112 );
    }

    draw(ctx){
        this.sprite.draw(ctx , this.position.x, this.position.y, 336*2 , 112*2 );
    }

}