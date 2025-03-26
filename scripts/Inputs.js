class Inputs
{
    constructor(player){
        this.player =player;

        document.addEventListener("keydown" ,(event) =>{
            if(event.key === " " || event.key === "ArrowUp"){
                this.player.up();
            }
        });
        document.addEventListener("mousedown" ,(event) =>{
            this.player.up();
        });

    }
}