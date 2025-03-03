class gameManager{

    constructor(){

        this.deltaTime = 0;
        this.lastTime =0;
        this.gamestate ="start";
        this.objects;

        requestAnimationFrame((timestamp) => this.gameLoop(timestamp));

    }

    gameLoop(timestamp){

        this.deltaTime = timestamp - this.lastTime;
        this.lastTime = timestamp;

        console.log(this.lastTime);

        requestAnimationFrame((timestamp) => this.gameLoop(timestamp));
    }

    update(){

        
        
    }

    draw(){

    

    }

    addObject(entity){
        this.object.push(entity);
    }
    removeObject(entity){
        this.object.pop(entity);
    }

}