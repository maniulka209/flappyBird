class Timer
{
    constructor(){
        this.isOn =false;
        this.startTime = 0;
    }
    
    start()
    {
        this.isOn = true;
        this.startTime = Date.now();
    }

    update()
    {
        if(this.isOn){
            let currentTime = Date.now();  
            this.deltaTimeInSeconds = (currentTime -  this.startTime)  /1000; 

            this.startTime = Date.now();
        }
    }
}