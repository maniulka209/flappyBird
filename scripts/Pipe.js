class Pipe
{

    constructor(posX, posY, pipeState)
    {   
        this.width = 52 ;
        this.height = 320;

        this.pipeState = pipeState;
        this.position = new Vec2(posX,posY);
        
        
        if(pipeState == "rotate"){
            this.sprite = new Sprite("assets/pipe-green_rotated.png", 0, 0, this.width, this.height);
        }
        else{
            this.sprite = new Sprite("assets/pipe-green.png", 0, 0, this.width, this.height);
        }
    }

    draw(ctx)
    {
        this.sprite.draw(ctx, this.position.x, this.position.y, this.width*2, this.height*2 )
    }
}