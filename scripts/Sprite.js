class Sprite{

    constructor(textureSrc, x, y, width, height)
    {
        this.texture = new Image() ;
        this.texture.src = textureSrc;

        this.sx = x;
        this.sy = y;
        this.swidth =  width;
        this.sheight = height;
    }

    draw(ctx, posX, posY, width, height)
    {  
        ctx.drawImage( this.texture,this.sx , this.sy , this.swidth , this.sheight , posX , posY , width , height)
    }
}