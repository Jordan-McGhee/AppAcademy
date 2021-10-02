// SUM
// Write a sum function that takes any number of arguments:

// sum(1, 2, 3, 4) === 10;
// sum(1, 2, 3, 4, 5) === 15;
// Solve it first using the arguments keyword, then rewrite your solution to use the ... rest operator.

function sumWithArgs() {
    let total = 0
    for (let i =0; i < arguments.length; i++) {
        total += arguments[i]
    }

    return total
}

function sumWithRest(...args) {
    let total = 0
    args.forEach((arg) => {
        total += arg
    })

    return total
}

// console.log(sumWithArgs(1,2,3,4,5))
// console.log(sumWithRest(1,2,3,4,5))


// CURRIED SUM
// Write a curriedSum function that takes an integer (how many numbers to sum) and returns a function that can be successively called with single arguments until it finally returns a sum. That is:

// const sum = curriedSum(4);
// sum(5)(30)(20)(1); // => 56

function curriedSum(numArgs) {
    const numbers = []

    function _curriedSum(num) {
        numbers.push(num);

        if (numbers.length == numArgs) {
            let total = 0

            numbers.forEach((number) => {
                total += number
            })

            return total
        }

        return _curriedSum
    }

    return _curriedSum
}

// const sum = curriedSum(4)
// console.log(sum(5)(30)(20)(1))


// FUNCTION.PROTOTYPE.CURRY
// Write a method Function.prototype.curry(numArgs). This should return a function that will:

// Collect up arguments until there are numArgs of them,
// If there are too few arguments still, it should return itself.
// When there are numArgs arguments, it should call the original function.
// Write a version that uses Function.prototype.apply and another one that uses ... (the spread operator).

Function.prototype.curry = function(numArgs) {
    const numbers = []
    const fn = this

    function _curriedSum(num) {
        numbers.push(num)

        if (numbers.length === numArgs) {
            return fn(...args)
        }

        return _curriedSum
    }

    return _curriedSum
}