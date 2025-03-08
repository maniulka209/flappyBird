class PipeManager
{

    constructor(ctx, timer)
    {
        this.pipes = [];
        this.timePassed = 0;
        this.ctx = ctx;
        this.on = false;
        this.timer = timer;
        this.timePassed = 0;
    }

    start()
    {   
        const CANVAS_END = 768;
        this.pipes.push(new Pipe(CANVAS_END*2 , 0,"rotate")); 
        this.pipes.push(new Pipe(CANVAS_END*2 , 500,"defult")); 
    }

    update()
    {   
        const velocity = 100.0;
        const PIEPE_WIDTH = 52;
        const PIEP_TRESHOLD_RESPAWN = 500;
        const CANVAS_END = 768;

        this.timePassed += this.timer.deltaTimeInSeconds;

        for(let element of this.pipes){
            element.position.x -= velocity * this.timer.deltaTimeInSeconds;
        }
        
        if( this.pipes.length != 0 && this.pipes[0].position.x < -PIEPE_WIDTH ){
            this.pipes.shift();
        }

        if(this.pipes.length != 0 && this.pipes[this.pipes.length-1].position.x  <= PIEP_TRESHOLD_RESPAWN){
            this.pipes.push(new Pipe(CANVAS_END , 0,"rotate")); 
            this.pipes.push(new Pipe(CANVAS_END , 500,"defult")); 
            this.timePassed = 0;
        }

    }

    draw()
    {
        for(let element of this.pipes){
            element.draw(this.ctx);
        }
    }
}