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
Array.prototype.myEach = function(func) {
    for(i=0; i<this.length; i++) {
        func(this[i])
    }
}

// NUMS.myEach((num) => {
//     console.log(`Square of ${num} is ${num*num}`)
// })


// myMap
Array.prototype.myMap = function(func) {
    let newArr = []

    this.myEach(el => newArr.push(func(el)))

    return newArr
}

// console.log(NUMS.myMap(num => num*num))


// myReduce
Array.prototype.myReduce = function(func, initialValue) {
    let arr = this

    if(initialValue === undefined) {
        initialValue = arr[0]
        arr = arr.slice(1)
    }

    let result = initialValue

    arr.myEach(el => result = func(result, el))

    return result
}

console.log(NUMS.myReduce((total, item) => total + item))