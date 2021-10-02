// inherits
// We've learned a couple of ways to implement class inheritance in Javascript. Let's first look at using a Surrogate.

// There are a number of steps:

// Define a Surrogate class
// Set the prototype of the Surrogate (Surrogate.prototype = SuperClass.prototype)
// Set Subclass.prototype = new Surrogate()
// Set Subclass.prototype.constructor = Subclass
// Write a Function.prototype.inherits method that will do this for you. Do not use Object.create right now; you should deeply understand what the new keyword does and how the __proto__ chain is constructed. This will help you in the upcoming Asteroids project:

Function.prototype.inherits = function(SuperClass) {
    function Surrogate() {};
    Surrogate.prototype = SuperClass.prototype
    this.prototype = new Surrogate()
    this.prototype.constructor = this
}

// using object.create()
Function.prototype.inherits2 = function(SuperClass) {
    this.prototype = Object.create(SuperClass.prototype)
    this.prototype.constructor = this
}

class Dog {
    constructor(name) {
        this.name = name
    }
    bark() {
        console.log(`${this.name} barks! WOOF`)
    }
}


class PitBull extends Dog {
    constructor(name) {
        super(name)
    }
    play() {
        console.log(`${this.name} loves to play!`)
    }
}


class Akita extends Dog {
    constructor(name) {
        super(name)
    }
    rollOver() {
        console.log(`${this.name} rolled over!`)
    }
}


PitBull.inherits(Dog)
Akita.inherits2(Dog)

const holly = new PitBull("Holly")
holly.bark()
holly.play()

const muffyn = new Akita("Muffyn")
muffyn.bark()
muffyn.rollOver()
