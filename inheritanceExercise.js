Function.prototype.inherits = function (parent) {
    function Surrogate(){}
    Surrogate.prototype = parent.prototype;
    this.prototype = new Surrogate();
    this.prototype.constructor = this;
};

function MovingObject() { }

function Ship() { }
Ship.inherits(MovingObject);

function Asteroid() { }
Asteroid.inherits(MovingObject);

Asteroid.prototype.slam = function(){
    console.log("asteroid slams into another");
}

let asteroid = new Asteroid;
let ship = new Ship;
// Defining a method on Asteroid's prototype should not mean that a ship can call it.
// asteroid.slam(); // should work
// ship.slam(); // shouldn't work

// Adding to Ship or Asteroid's prototypes should not change MovingObject's prototype.
MovingObject.prototype.fall = function () {};
console.log(MovingObject.prototype);
// doesn't have slam

// The Ship and Asteroid prototypes should not be instances of MovingObject.
console.log(ship.prototype instanceof MovingObject); // should print false
console.log(asteroid.prototype instanceof MovingObject); // should print false
console.log(ship instanceof Ship); // should print true 
console.log(asteroid instanceof Asteroid); // should print true 