class GroundManager{
    constructor(ctx, time, player){
        this.ctx = ctx;
        this.timer = time;
        this.player = player;
        this.elements = [];

        this.elements.push(new Ground(0));
        this.elements.push(new Ground(335*2));
    }

    update(){

        if(this.player.playerState != "dead"){
            const VELOCITY = 200;
            for(let ground of this.elements){
                if(this.checkCollison(ground,this.player)){
                    this.player.playerState = "dead";

                }
                 ground.position.x -= VELOCITY * this.timer.deltaTimeInSeconds
            }
            if(this.elements[0].position.x <= -366*2){
                this.elements.shift();
            }
            if(this.elements[this.elements.length-1].position.x <= 831 - 366 * 2){
                this.elements.push(new Ground(768));
            }
        }
    }

    draw(){
        for(let ground of this.elements){
            ground.draw(this.ctx);
        }
    }

    checkCollison(obj1 , obj2){
        return  obj1.position.y > obj2.position.y &&
                obj1.position.y < obj2.position.y + obj2.height * 2;
    }

}