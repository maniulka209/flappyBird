class Pipe
{

    constructor(posX, posY, pipeState)
    {   
        const PIEPE_WIDTH = 52 ;
        const PIPE_HEIGHT = 320;

        this.pipeState = pipeState;
        this.position = new Vec2(posX,posY);
        
        
        if(pipeState == "rotate"){
            this.sprite = new Sprite("assets/pipe-green_rotated.png", 0, 0, PIEPE_WIDTH, PIPE_HEIGHT);
        }
        else{
            this.sprite = new Sprite("assets/pipe-green.png", 0, 0, PIEPE_WIDTH, PIPE_HEIGHT);
        }
    }

    draw(ctx)
    {
        const PIEPE_WIDTH = 52;
        const PIPE_HEIGHT = 320;
        this.sprite.draw(ctx, this.position.x, this.position.y, PIEPE_WIDTH*2, PIPE_HEIGHT*2 )
        
    }
}