// create a new Game class, it should receive the canvas HTML element as an argument.
// Get this by calling document.getElementById("bird-game")

import Level from "./level";
import Bird from "./bird";

export default class FlappyBird {
    constructor(canvasEl) {
        this.ctx = canvasEl.getContext("2d");;
        this.dimensions = { width: canvasEl.width, height: canvasEl.height};
        this.restart();

        this.ctx.canvas.addEventListener("mousedown", this.click.bind(this));
    }

    restart(){
        this.running = false;
        this.level = new Level(this.dimensions);
        this.bird = new Bird(this.dimensions);
        this.animate();
    }

    animate(){
        this.level.animate(this.ctx);
        this.bird.animate(this.ctx);

        if (this.running){
            requestAnimationFrame(this.animate.bind(this));
        }
    }

    play(){
        this.running = true;
        this.animate();
    }

    click() {
        if (!this.running) {
            this.play();
        }
        this.bird.flap();
    }

}

