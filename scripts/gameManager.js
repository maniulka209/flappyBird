class GameManager{

    constructor()
    {
        this.deltaTimeInSeconds = 0;
        this.lastTime =0;
        this.entities = [];

        const canvas = document.getElementById("canvas");
        this.ctx = canvas.getContext("2d");

        this.timer = new Timer();

        this.player = new Player(this.ctx , this.timer ,null);
        this.pipeManager = new PipeManager(this.ctx , this.timer, this.player);
        this.player.pipeManager = this.pipeManager;
        this.background = new Sprite("assets/background-day.png", 0, 0, 288, 512 );


        this.addObject(this.player);
        this.addObject(this.pipeManager);

        this.inputs = new Inputs(this.player);
        

        this.timer.start();
        requestAnimationFrame((timestamp) => this.gameLoop(timestamp));
    }

    gameLoop(timestamp)
    {
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height);

        this.timer.update();

        this.ctx.moveTo(768/2 + 35,0);
        this.ctx.lineTo(768/2 + 35, 1024);
        this.ctx.stroke();

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
        this.background.draw(this.ctx, 0, 0, 288*3, 512*2);
        for(let element of this.entities){
            element.draw();
        }
    }
 
    addObject(entity)
    {
        this.entities.push(entity);
    }
}
