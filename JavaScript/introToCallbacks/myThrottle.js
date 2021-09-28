// myThrottle
// Suppose we want to limit how frequently a function can be called. A throttle function allows us to specify a minimum time interval that must pass between invocations. This can be especially useful if the function does something computationally expensive. It is also sometimes used for games to limit how often a player can trigger some event.

// Write your own myThrottle(interval) function on the Function.prototype. myThrottle should take an interval as an argument and return a "throttled" version of the original function that can only be invoked every interval milliseconds. In order to accomplish this, declare a variable, tooSoon, outside of the scope of the returned function. Your returned function should close over the tooSoon variable and:

// do nothing if tooSoon is true
// if tooSoon is false:
// set tooSoon to true
// use setTimeout to set tooSoon back to false after interval milliseconds
// invoke the original function with the original arguments.

Function.prototype.myThrottle = function (interval) {
    let tooSoon = false
    return (...args) => {
        if (!tooSoon) {
            tooSoon = true;
            setTimeout(() => tooSoon = false, interval)
            this(...args)
        }
    }
}

// Once you think you have it working, try the following example code:

class Neuron {
    fire() {
        console.log("Firing!");
    }
}

const neuron = new Neuron();
// When we create a new Neuron,
// we can call #fire as frequently as we want

// The following code will try to #fire the neuron every 10ms. Try it in the console:
// const interval = setInterval(() => {
//     neuron.fire();
// }, 10);

// // You can use clearInterval to stop the firing:
// clearInterval(interval);

// Using Function#myThrottle, we should be able to throttle
// the #fire function of our neuron so that it can only fire
// once every 500ms:

neuron.fire = neuron.fire.myThrottle(5000);

const interval = setInterval(() => {
    neuron.fire();
}, 10);

// This time, if our Function#myThrottle worked correctly,
// the Neuron#fire function should only be able to execute
// every 500ms, even though we're still trying to invoke it
// every 10ms!

// If we want this behavior for ALL neurons, we can do the same logic in the constructor:

// class Neuron {
//     constructor() {
//         this.fire = this.fire.myThrottle(500);
//     }

//     fire() {
//         console.log("Firing!");
//     }
// }
