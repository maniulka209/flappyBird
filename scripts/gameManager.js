class GameManager{

    constructor()
    {
        this.deltaTimeInSeconds = 0;
        this.lastTime =0;
        this.gamestate ="start";
        this.entities = [];

        this.spriteTest = new Sprite("assets/bluebird-upflap.png", 0, 0, 34, 24);
        const canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");

        requestAnimationFrame((timestamp) => this.gameLoop(timestamp));
    }

    gameLoop(timestamp)
    {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);
        this.deltaTimeInSeconds = (timestamp - this.lastTime) /1000; 
        this.lastTime = timestamp;  

        console.log(this.deltaTimeInSeconds);
         
        this.spriteTest.draw(this.ctx,100, 100, 68 , 48 );

        requestAnimationFrame((timestamp) => this.gameLoop(timestamp));
    }

    update()
    {
        for(let element of this.entities){
            element.update();
        }
    }

    draw()
    {
        for(let element of this.entities){
            element.draw();
        }
    }
 
    addObject(entity)
    {
        this.entities.push(entity);
    }
}
