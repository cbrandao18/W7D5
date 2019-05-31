// Write a sum function that takes any number of arguments

// Solve it first using the arguments keyword
function sum1(){
    let sum = 0;
    for (let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}

// rewrite your solution to use the ...rest operator
function sum2(...args){
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
        sum += args[i];
    }
    return sum;
}

// Rewrite your myBind method so that it can take both bind - time arguments and call - time arguments.

// Solve it first using the arguments keyword.

Function.prototype.myBind = function(context) {
    
    let bindArgs = [].slice.call(arguments, 1);
    let that = this;
    return function () {
        let callArgs = [].slice.call(arguments);
        that.apply(context, bindArgs.concat(callArgs));
    }
}


// write a second version using the ...rest operator. 
Function.prototype.myBind2 = function(context, ...bindArgs){
    return (...callArgs) => this.apply(context, bindArgs.concat(callArgs));
}

class Cat {
    constructor(name) {
        this.name = name;
    }

    says(sound, person) {
        console.log(`${this.name} says ${sound} to ${person}!`);
        return true;
    }
}

class Dog {
    constructor(name) {
        this.name = name;
    }
}

// const markov = new Cat("Markov");
// const pavlov = new Dog("Pavlov");
// markov.says("meow", "Ned"); // Markov says meow to Ned!
// markov.says.myBind(pavlov, "meow", "Kush")(); // Pavlov says meow to Kush!
// markov.says.myBind(pavlov)("meow", "a tree"); // Pavlov says meow to a tree!
// markov.says.myBind(pavlov, "meow")("Markov"); // Pavlov says meow to Markov!
// const notMarkovSays = markov.says.myBind(pavlov);
// notMarkovSays("meow", "me");
// // Pavlov says meow to me!

function curriedSum(numArgs){
    let nums = [];

    function _curriedSum(num){
        nums.push(num);
        if (nums.length === numArgs) {
            let sum = 0;
            nums.forEach( el => {
                sum += el;
            })
            return sum;
        } else {
            return _curriedSum;
        }
    }

    return _curriedSum;
}

// const sum = curriedSum(4);
// console.log(sum(5)(30)(20)(1)); // => 56


// Function.prototype.curry
// Write a method Function.prototype.curry(numArgs).This should return a function that will:

// Collect up arguments until there are numArgs of them,
//     If there are too few arguments still, it should return itself.
// When there are numArgs arguments, it should call the original function.
// Write a version that uses Function.prototype.apply
Function.prototype.curry = function(numArgs){
    let args = [];
    let that = this;
    function _curry(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            //call the `this` function
            return that.apply(null, args);
        } else {
            return _curry;
        }
        
    }

    return _curry;
}


// write another one that uses ... (the spread operator).
Function.prototype.curry2 = function(numArgs){
    let args = [];
    let that = this;
    function _curry(arg) {
        args.push(arg);
        if (args.length === numArgs) {
            //call the `this` function
            // return this.call(...args);
            return that(...args);
        } else {
            return _curry;
        }

    }

    return _curry;
}

function multiply(...args){
    let product = 1;
    args.forEach(arg => product *= arg);
    return product;
}

let mult = multiply.curry2(2);
console.log(mult(2)(2));