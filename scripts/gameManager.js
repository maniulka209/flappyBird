class GameManager{

    constructor()
    {
        this.deltaTimeInSeconds = 0;
        this.lastTime =0;
        this.entities = [];

        const canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");

        this.timer = new Timer();

        this.player = new Player(this.ctx , this.timer);
        this.addObject(this.player);

        this.pipeManager = new PipeManager(this.ctx, this.timer);
        this.addObject(this.pipeManager);
        

        this.pipeManager.start();
        this.timer.start();
        requestAnimationFrame((timestamp) => this.gameLoop(timestamp));
    }

    gameLoop(timestamp)
    {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        this.timer.update();

        //console.log(this.timer.deltaTimeInSeconds);

        this.update();
        this.draw();

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
