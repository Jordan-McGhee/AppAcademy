// // // // PHASE 2: Enumerable
// // // // Again, monkey-patch the following methods to the Array class using swell new language we've been learning.

// // // Array#myEach(callback) - receives a callback function and executes the callback for each element in the array
// // // Note that JavaScript's forEach function has no return value (returns undefined)

// // // Array#myMap(callback) - receives a callback function, returns a new array of the results of calling the callback function on each element of the array
// // // should use myEach and a closure

// // // Array#myReduce(callback[, initialValue]) - (like Ruby's Array#inject) receives a callback function, and optional initial value, returns an accumulator by applying the callback function to each element and the result of the last invocation of the callback (or initial value if supplied)
// // // initialValue is optional and should default to the first element of the array if not provided

// // examples:
// // // without initialValue
// // [1, 2, 3].myReduce(function(acc, el) {
// //   return acc + el;
// // }); // => 6

// // // with initialValue
// // [1, 2, 3].myReduce(function(acc, el) {
// //   return acc + el;
// // }, 25); // => 31

// // should also use myEach

// NB [initialValue] is the conventional way for documentation to express that the args between [ and ] are optional inputs. Your function definition will not include these square brackets.

// Recap
// Closures and callbacks are part of the foundation of JavaScript and provide us with a lot of flexibility and modularity in our code. Thanks to closures we can create higher order functions and "hide" private variables.

const NUMS = [1,2,3,4,5]

// myEACH

// set myEach equal to a function that takes another function as an argument
Array.prototype.myEach = function(func) {

    // iterate over the length of the arr, using this
    for(i=0; i<this.length; i++) {

        // callback that will be filled in below. This function will take the arr at index i as an argument
        func(this[i])
    }
}

// Call myEach on NUMS. Fat arrow function is the callback from before. It will print to the console 
// NUMS.myEach((num) => {
//     console.log(`Square of ${num} is ${num*num}`)
// })


// myMap
// set myMap equal to a function that takes another function as an argument
Array.prototype.myMap = function(func) {

    // variable for the arr we will return
    let newArr = []

    // uses myEach (a closure or nested function), which takes a function as an argument
    // el => newArr.push() is the callback function for myEach
    // func(el) is the callback function for myMap
    this.myEach(el => newArr.push(func(el)))

    return newArr
}

// calls myMap and passes a fat arrow function as an argument
// console.log(NUMS.myMap(num => num*num))


// myReduce

// set myReduce equal to a function that takes another function and an inital value as arguments
Array.prototype.myReduce = function(func, initialValue) {

    // set arr equal to this
    let arr = this

    // check if initialValue is given in the function call
    if(initialValue === undefined) {

        // if it isn't, set inital value to the first value in the arr
        initialValue = arr[0]

        // remove the first index/value from the arr
        arr = arr.slice(1)
    }

    // set result equal to initial value 
    let result = initialValue

    // use myEach again, which takes another function as an argument
    // el => result is the callback
    // func(result, el) is the callback for the original function
    arr.myEach(el => result = func(result, el))
    
    return result
}

console.log(NUMS.myReduce((total, item) => total + item))