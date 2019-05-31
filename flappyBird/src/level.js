export default class Level {
    constructor(dimensions) {
        this.dimensions = dimensions;
        this.pipes = []
    }

    // create a drawBackground() method.
    // When invoked by the animate method, this method will receive the 
    // context as an argument.Then, draw the background on the canvas.
    // You'll need to use the fillRect method to fill the entire canvas 
    // with your desired background color. Set the color using fillStyle.

    animate(ctx){
        this.drawBackground(ctx);
    }

    drawBackground(ctx) {
        ctx.fillStyle = "green";
        ctx.fillRect(0, 0, this.dimensions.width, this.dimensions.height);
    }
}
