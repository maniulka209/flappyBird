class Pipe
{

    constructor(posX, posY, pipeState, height = 320  )
    {   
        const PIEPE_WIDTH= 52 ;

        this.pipeState = pipeState;
        this.position = new Vec2(posX,posY);
        this.height = height;
        if(pipeState == "rotate"){
            this.sprite = new Sprite("assets/pipe-green_rotated.png", 0, 0, PIEPE_WIDTH, this.height);
        }
        else{
            this.sprite = new Sprite("assets/pipe-green.png", 0, 0, PIEPE_WIDTH, this.height);
        }
    }

    draw(ctx)
    {
        const PIEPE_WIDTH= 52 ;
        this.sprite.draw(ctx, this.position.x, this.position.y, PIEPE_WIDTH, this.height )
        
    }
}