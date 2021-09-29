// Let's do a few slightly more involved problems with arrays. These should be pretty familiar.

// Instructions
// Write the following functions:

// Array#bubbleSort - receives an array, returns a sorted array by implementing bubble sort sorting algorithm
// String#substrings - receives a string, returns an array of all substrings

Array.prototype.bubbleSort = function() {
    let isSorted = false

    while(!isSorted){

        isSorted = true

        for(let i=0; i<this.length; i++) {
            if(this[i] > this[i+1]){
                let temp = this[i]
                this[i] = this[i+1]
                this[i+1] = temp

                isSorted = false
            }
        }
    }

    return this
}

// console.log([5,4,3,2,1].bubbleSort())

// String#substrings
String.prototype.substrings = function() {
    let arr = []

    for (let start=0; start < this.length; start ++) {
        for (let end = start+1; end <= this.length; end ++) {
            arr.push(this.slice(start,end))
        }
    }

    return arr
}

console.log('abc'.substrings())