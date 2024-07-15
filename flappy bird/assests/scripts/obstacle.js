class Obstacle{
    constructor(game, x){
        this.game = game;
        this.spritewidth = 120;
        this.spriteHeight = 120;
        this.scaledWidth = this.spritewidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;
        this.x = x;
        this.y = this.game.height * 0.5 - this.height;
 
    }
    update(){
        this.x -= this.game.speed;

    }
    draw(){
        this.game.ctx.fillRect(this.x, this.y, this.scaledWidth, this.scaledHeight);

    }
    resize(){
        this.scaledWidth = this.spritewidth * this.game.ratio;
        this.scaledHeight = this.spriteHeight * this.game.ratio;

    }
}