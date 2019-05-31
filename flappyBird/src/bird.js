const CONSTANTS = {
    GRAVITY: 0.8,
    FLAP_SPEED: -8,
    TERMINAL_VEL: 12,
    BIRD_WIDTH: 40,
    BIRD_HEIGHT: 30
};

export default class Bird {
    constructor(dimensions){
        this.velocity = 0;
        this.dimensions = dimensions;
        this.x = this.dimensions.width / 3;
        this.y = this.dimensions.height / 2;
    }

    // write a drawBird method.
    // This should receive the context as an argument 
    // and draw onto it the bird.I drew the bird as a yellow 
    // 40x30 rectangle, which looked fabulous.You will use exactly 
    // the same methods, fillRect and fillStyle, as in the Level.
    drawBird(ctx){
        ctx.fillStyle = "yellow";
        ctx.fillRect(this.x, this.y, CONSTANTS.BIRD_WIDTH, CONSTANTS.BIRD_HEIGHT);
    }

    animate(ctx){
        this.move();
        this.drawBird(ctx);   
       
    }

    move(){
        this.y += this.velocity;
        this.velocity += CONSTANTS.GRAVITY;
    }

    flap(){
        this.velocity = CONSTANTS.FLAP_SPEED;
    }
}