class PipeManager
{

    constructor(ctx, timer, player)
    {
        this.pipes = [];
        this.ctx = ctx;
        this.on = false;
        this.timer = timer;
        this.player = player;
        this.isOn = false;
    }

    start()
    {   
        const CANVAS_END = 768;
        const SPACE_BEETWEEN_PIPES = 200;

        this.isOn =true;

        let random = Math.random() *1.5;
        let secondRandom = 1.5-random;
        this.previousPipeRandomNummber = random;
        
        this.pipes.push(new Pipe(CANVAS_END*2 , (-1024/2 + 380 ) - random*SPACE_BEETWEEN_PIPES ,"rotate"));
        this.pipes.push(new Pipe(CANVAS_END*2 , (1024/2) + secondRandom*SPACE_BEETWEEN_PIPES ,"defult")); 

    }
    stop(){
        this.isOn =false;
    }

    update()
    {      
        if(this.isOn)
        {
            for( let pipe of this.pipes){
                if(this.checkCollison(this.player , pipe))
                {
                    console.log("ups");
                    this.player.playerState ="dead";
                    this.stop();
                }
            }
            const VELOCITY = 200.0;
            const PIEPE_WIDTH = 52;
            const PIPE_TRESHOLD_RESPAWN = 500;
            const CANVAS_END = 768;
            const SPACE_BEETWEEN_PIPES = 200;
            const MIN_DIFFERENCE_BETWEEN_GAP_POSITION = 0.5;



            for(let element of this.pipes){
                element.position.x -= VELOCITY * this.timer.deltaTimeInSeconds;
            }
            
            if( this.pipes.length != 0 && this.pipes[0].position.x < -PIEPE_WIDTH ){
                this.pipes.shift();
            }

            if(this.pipes.length != 0 && this.pipes[this.pipes.length-1].position.x  <= PIPE_TRESHOLD_RESPAWN){

                
                let random = Math.random()* 1.5;

                while(Math.abs(this.previousPipeRandomNummber - random) < MIN_DIFFERENCE_BETWEEN_GAP_POSITION ){
                    random = Math.random()* 1.5 ;
                }

                let secondRandom = 1.5 - random;

                this.pipes.push(new Pipe(CANVAS_END , (-1024/2 + 380 ) - random*SPACE_BEETWEEN_PIPES,"rotate")); 
                this.pipes.push(new Pipe(CANVAS_END , (1024/2) + secondRandom*SPACE_BEETWEEN_PIPES,"defult")); 

                this.previousPipeRandomNummber = random;
            }
        }

    }

    draw()
    {
        for(let element of this.pipes){
            element.draw(this.ctx);
        }
    }

    
    checkCollison(obj1 , obj2){
        return  obj1.position.x + obj1.width * 2 > obj2.position.x &&
                obj2.position.x + obj2.width * 2 > obj1.position.x &&
                obj1.position.y > obj2.position.y &&
                obj1.position.y < obj2.position.y + obj2.height * 2;
    }

}