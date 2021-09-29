// Instructions
// Define a Cat class
// The constructor function should take a name and owner and store them in the instance
// Write Cat.prototype.cuteStatement method that returns "[owner] loves [name]"
// cuteStatement should be defined on the prototype
// Prototypes example:
// Create several Cat instances, test out their cuteStatement method
// Reassign the Cat.prototype.cuteStatement method with a function that returns "Everyone loves [name]!"
// Invoke the cuteStatement method on your old cats; the new method should be invoked
// Add a meow method to the Cat class You can now call meow on your previously constructed Cat instances
// Take one of your cats and set the meow property on the instance (cat1.meow = function () { ... }. Call meow on this Cat instance; call meow on any other cat. The other cats should continue to use the prototype method.

function Cat(name, owner) {
    this.name = name;
    this.owner = owner;
}

Cat.prototype.cuteStatement = function () {
    console.log(`${this.owner} loves ${this.name}`)
}

let cat1 = new Cat("Cat1", "Me")
let cat2 = new Cat("Cat2", "You")
let cat3 = new Cat("Cat3", "Her")

cat1.cuteStatement()
Cat.prototype.cuteStatement = function () {
    console.log(`Everyone loves ${this.name}`)
}
cat1.cuteStatement()

Cat.prototype.meow = function () {
    console.log(`${this.name} meows!`)
}

cat1.meow = function () {
    console.log(`We don't mess with ${this.name}`)
}

cat1.meow()
cat2.meow()