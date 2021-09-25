// // Overview
// Let's take a little while to create a few (hopefully familiar) functions. These should give you some experience iterating over and mutating arrays.

// Instructions
// Monkey-patch the following methods to the Array class. Remember, we want to use prototype here.

// Array#uniq - returns a new array containing each individual element of the original array only once (creating all unique elements)
// the elements should be in the order in which they first appear in the original array
// should not mutate the original array
// ([1,2,2,3,3,3].uniq() => [1,2,3])
// Array#twoSum - returns an array of position pairs where the elements sum to zero
// Array#transpose - where we have a two-dimensional array representing a matrix. returns the transpose
// should not mutate the original array
// Recap
// That was super fun, right?

Array.prototype.uniq = function() {
    let newArr = []

    for (let i=0; i<this.length; i++) {
        if (newArr.indexOf(this[i]) === -1) {
            newArr.push(this[i])
        }
    }

    return newArr
}

// Alternate using .forEach and a callback

Array.prototype.unique = function () {
    let newArr = []

    this.forEach(function (el) {
        if (!newArr.includes(el)) {
            newArr.push(el)
        }
    })

    return newArr
}

// console.log([1,1,1,2,2,3,3,4,5,6].uniq())
// console.log([1,1,1,2,2,3,3,4,5,6].unique())

Array.prototype.twoSum = function() {
    let pairs = []
    
    for(i=0; i<this.length; i++) {
        for(j=(i+1); j<this.length; j++) {
            if(this[i] + this[j] === 0) {
                pairs.push([i,j])
            }
        }
    }

    return pairs
}

// console.log([-2,-1,0,1,2].twoSum())
