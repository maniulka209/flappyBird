class Score
{
    constructor(ctx, pipeManager, player){
        this.ctx = ctx;
        this.score = 0;
        this.pipeManager = pipeManager;
        this.player = player;

        this.scoreDigit = [];   
    }

    draw()
    {  
        this.scoreToDigit();

        const SPRITE_WIDTH = 24;
        const SPRITE_HEIGHT = 36;
        
        for(let i = 0 ; i < this.scoreDigit.length ; i++){
            let sprite = this.digiToSprite(this.scoreDigit[i]);
            sprite.draw(this.ctx,  SPRITE_WIDTH*2 * (i+1) +1 ,  SPRITE_WIDTH*2 ,  SPRITE_WIDTH* 2 , SPRITE_HEIGHT*2);
        }

    }

    update()
    {   
        if(this.player.playerState != "starting" && this.player.playerState != "dead"){
            let currentPipe =this.getNextPipe();
             if(this.player.position.x >= this.pipeManager.pipes[currentPipe].position.x){
                this.score += 1;
             }
        }
    }


    getNextPipe()
    {   
        for(let i = 0; i < this.pipeManager.pipes.length ; i++){
            if(this.pipeManager.pipes[i].position.x >= this.player.position.x
                && this.pipeManager.pipes[i].position.x - this.player.position.x <= 401 - this.player.width ){
                return i;
            }
        }
        return 0;
    }   

    scoreToDigit(){ 
        this.scoreDigit = [];
        if(this.score > 9){
            let score = this.score
            while( score != 0){
                let element = score % 10;
                this.scoreDigit.push(element);
                score = Math.floor(score / 10);
            }   
        }
        else{
            this.scoreDigit.push(this.score);
        }
        this.scoreDigit.reverse();
    }


    digiToSprite(number){
        switch(number){
            case 0:
                return new Sprite("assets/0.png",0 ,0,24,36);
             case 1:
                return new Sprite("assets/1.png", 0, 0, 16, 36);
             case 2:
                return new Sprite("assets/2.png", 0, 0, 24, 36);
             case 3:
                return new Sprite("assets/3.png", 0, 0, 24, 36);
            case 4:
                return new Sprite("assets/4.png", 0, 0, 24, 36);
            case 5:
                return new Sprite("assets/5.png", 0, 0, 24, 36);
            case 6:
                return new Sprite("assets/6.png", 0, 0, 24, 36);
            case 7:
                return new Sprite("assets/7.png", 0, 0, 24, 36);
            case 8:
                return new Sprite("assets/8.png", 0, 0, 24, 36);
            case 9:
                return new Sprite("assets/9.png", 0, 0, 24, 36);
        }
    }
}