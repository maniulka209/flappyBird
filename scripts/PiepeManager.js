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
        const SPACE_BEETWEEN_PIPES = 200;
         
        let random = Math.random(0.8 - 0.2) + 0.2;
        let secondpipe = Math.abs(1-random);
        console.log(random , " drugie" , secondpipe);
        
        this.pipes.push(new Pipe(CANVAS_END*2 , (-1024/2 + 380 )-random*SPACE_BEETWEEN_PIPES ,"rotate"));
        this.pipes.push(new Pipe(CANVAS_END*2 , (1024/2)+secondpipe*SPACE_BEETWEEN_PIPES ,"defult")); 
    }

    update()
    {   
        const VELOCITY = 100.0;
        const PIEPE_WIDTH = 52;
        const PIPE_TRESHOLD_RESPAWN = 500;
        const CANVAS_END = 768;

        this.timePassed += this.timer.deltaTimeInSeconds;

        for(let element of this.pipes){
            element.position.x -= VELOCITY * this.timer.deltaTimeInSeconds;
        }
        
        if( this.pipes.length != 0 && this.pipes[0].position.x < -PIEPE_WIDTH ){
            this.pipes.shift();
        }

        if(this.pipes.length != 0 && this.pipes[this.pipes.length-1].position.x  <= PIPE_TRESHOLD_RESPAWN){

             
            let random = Math.random(0.8 - 0.2) + 0.2;
            let secondpipe = Math.abs(1-random);
            const SPACE_BEETWEEN_PIPES = 200;

            console.log(random , " drugie" , secondpipe);

            this.pipes.push(new Pipe(CANVAS_END ,  (-1024/2 + 380 )-random*SPACE_BEETWEEN_PIPES,"rotate")); 
            this.pipes.push(new Pipe(CANVAS_END ,  (1024/2)+secondpipe*SPACE_BEETWEEN_PIPES,"defult")); 
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