// MadLib
// Write a function that takes three strings - a verb, an adjective, and a noun - uppercases and interpolates them into the sentence "We shall VERB the ADJECTIVE NOUN". Use ES6 template literals.

function madLib(verb, adj, noun){
    console.log(`We shall ${verb.toUpperCase()} the ${adj.toUpperCase()} ${noun.toUpperCase()}`)
}

// madLib("walk", "happy", "dog")


// isSubString
// Input 1) A String, called searchString. 2) A String, called subString.
// Output: A Boolean. true if the subString is a part of the searchString.

function isSubstring(searchString, subString){
    let arr = searchString.split(" ")
    for(i=0; i<arr.length; i++) {
        if(arr[i].toLowerCase() == subString.toLowerCase()) {
            return true
        }
    }
    return false
}

// console.log(isSubstring("time to program", "time"))
// console.log(isSubstring("Jump for joy", "joys"))


// FizzBuzz
// 3 and 5 are magic numbers.
// Define a function fizzBuzz(array) that takes an array and returns a new array of every number in the array that is divisible by either 3 or 5, but not both.

function fizzBuzz(arr){
    let newArr = []

    arr.forEach(element => {
        if(element % 3 == 0 && element % 5 ==0) {
            return;
        } else if (element % 3 == 0) {
            newArr.push(element);
        } else if (element % 5 == 0) {
            newArr.push(element);
        }
    })

    return newArr
}

let fizzArr = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20]
console.log(fizzBuzz(fizzArr))