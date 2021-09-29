// Now write a Game class and run it using Node:
// In the constructor, set a property for the stacks (perhaps this.towers).
// Write a Game.prototype.promptMove method that (1) prints the stacks, and (2) asks the user where they want to move a disc to/from. Pass the startTowerIdx and endTowerIdx to a callback.
// Test it by passing in dummy variables and make sure it works before you move on. For example, your callback should console.log out the startTowerIdx and endTowerIdx (and not run any other code).
// Write an isValidMove(startTowerIdx, endTowerIdx) method that checks that you can move the top of startTowerIdx onto the top of endTowerIdx.
// Test it by passing in dummy variables and make sure it works before you move on.
// See the theme here? Test each method, one at a time, before you move on.
// Write a move(startTowerIdx, endTowerIdx) method that only performs the move if it is valid. Return true/false to indicate whether the move was performed. Test it.

// Write a print method to print the stacks. I used JSON.stringify to turn the array of stacks to a string. This works sort of like Ruby's #inspect method (called by the Ruby p method). Test it.

// Write an isWon method that checks the stacks to see if all discs were moved to a new stack. Test it by passing in dummy variables and make sure it works before you move on.

// Write a Game.prototype.run(completionCallback) method.

// promptMove from the user.
// In the callback, try to perform the move. If it fails, print an error message.
// Test run here (yes, just make sure promptMove works within run).
// If the game is not yet won, call run again.
// Otherwise, log that the user has won, then call the completionCallback.
// Test this out, should we call isWon in the top level of run or in the callback to promptMove?
// Compare the run method you wrote to the pseudocode you originally had. Does it look like what you expected?

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

class Game {

    constructor(numDiscs) {
        this.towers = [
            [], // 0
            [], // 1
            [] // 2
        ];
        this.numDiscs = numDiscs

        for(let i=numDiscs; i >0; i--) {
            // given the number of discs, push them into the first stack, starting with the largest number first
            // example: [3,2,1] or [5,4,3,2,1]
            this.towers[0].push(i)
        }
    }

    isValidMove(startIndex, endIndex) {

        // SOLUTION CODE

        const startTower = this.towers[startIndex]
        const endTower = this.towers[endIndex]

        if (startTower.length === 0) {
            return false
        } else if (endTower.length == 0) {
            return true
        } else {
            const topStartDisc = startTower[startTower.length - 1]
            const endStartDisc = endTower[endTower.length - 1]
            return topStartDisc < endStartDisc
        }

        // MY CODE (mostly the same. Missed first two if conditions from above and defined variables in a confusion manner)

        // creates variables to compare the last values in the arrays of the given indices. Use startIndex/endIndex -1 because the arrays are 0 indexed. First [] grabs the array, second [] grabs the value at the end of the array
        // let lastItemStart = this.towers[startIndex-1][this.towers[startIndex-1].length-1]
        // let lastItemEnd = this.towers[endIndex-1][this.towers[endIndex-1].length-1]

        // checks if lastItemStart is smaller than lastItemEnd
        // if(lastItemStart < lastItemEnd) {

        //     // the move can be made, return true
        //     return true;

        // } else {

        //     // the move is invalid, return false
        //     return false;
        // }
    }

    isWon() {
        
        // SOLUTION CODE
        // move all the discs to the last or second tower
        // return (this.towers[2].length == 3) || (this.towers[1].length == 3);
        

        // MY CODE
        // checks to make sure that the first two arrays (towers) are empty, and that the last array has all the discs
        return this.towers[0].length == 0 && this.towers[1].length == 0 && this.towers[2].length == this.numDiscs

    }
    
    move(startIndex, endIndex) {

        // SOLUTION CODE

        if (this.isValidMove(startIndex, endIndex)) {
            this.towers[endIndex].push(this.towers[startIndex].pop());
            return true;
        } else {
            return false;
        }

        // MY CODE
        // DIFFERENCES: MY ANSWER IS LENGTHIER. DIDN'T RETURN TRUE OR FALSE EITHER. HAD THIS.PROMPTMOVE WHERE FALSE SHOULD GO. THE TRUE PORTION WAS SIMILAR, BUT LENGTHIER
        // if(!this.isValidMove(startIndex, endIndex)) {
        //     // invalid move, have user enter in new prompt?
        //     console.log("Your move was invalid. Please make a valid move.")

        //     // run promptMove and have move be the callback?
        //     this.promptMove(this.move())

        // } else {
        //     // valid move, so make it
        //     // grab the item from the end of startIndex array and push it to endIndex array
        //     // remove item from the end of startIndex array

        //     let discToBeMoved = this.towers[startIndex-1][this.towers[startIndex-1].length-1]
        //     this.towers[endIndex-1].push(discToBeMoved)
        //     this.towers[startIndex-1].pop()
        // }
    }

    print() {

        // SOLUTION CODE
        console.log(JSON.stringify(this.towers));

        // MY CODE
        // TRIED PRINTING OUT THE TOWERS HORIZONTALLY, BUT KEPT GETTING UNDEFINED
        // SO MANY THINGS I JUST DON'T KNOW YET

        // console.log(`Stack 1: ${this.towers[0]}\n
        // Stack 2: ${this.towers[1]}\n
        // Stack 3: ${this.towers[2]}\n`)
    }

    promptMove(reader, callback) {
        
        // SOLUTION CODE

        this.print();
        reader.question("Enter a starting tower: ", start => {
            const startTowerIdx = parseInt(start)-1;
            reader.question("Enter an ending tower: ", end => {
            const endTowerIdx = parseInt(end)-1;
            callback(startTowerIdx, endTowerIdx);
            });
        });


        // MY CODE
        // DIFFERENCES: MOSTLY THE SAME. HAD STARTINDEX DEFINED INSIDE SECOND QUESTION THOUGH. DOES THAT MATTER?
        // this.print();
        // reader.question("From which stack, would you like to move a disc? 1, 2 or 3? ", (res1) => {
        //     console.log(`You chose to move the disc in stack ${res1}.`)

        //     reader.question("What stack do you want to move it to? 1, 2 or 3? ", (res2) => {
        //         console.log(`You chose to move the disc from stack ${res1} to stack ${res2}`)

        //         const startIndex = parseInt(res1)
        //         const endIndex = parseInt(res2)

        //         // function to run after answers are provided?
        //         // this would be move() right...?
        //         callback(startIndex, endIndex)
        //     })
        // })
    }

    run(reader, completionCallback) {
        // SOLUTION CODE

        this.promptMove(reader, (startTowerIdx, endTowerIdx) => {
            if (!this.move(startTowerIdx, endTowerIdx)) {
                console.log("Invalid move!");
                }
        
                if (!this.isWon()) {
                // Continue to play!
                this.run(reader, completionCallback);
                } else {
                this.print();
                console.log("You win!");
                completionCallback();
                }
            });
        }


        // MY CODE
        // DIFFERENCES:
        // 1. THINK THIS IS WHERE I MADE MOST OF THE MISTAKES. DIDN'T HAVE READER AS AN ARGUMENT TO THE FUNCTION. DID THE CALLBACK DIFFERENTLY FOR THIS.PROMPTMOVE - NOT SURE IF IT WOULD HAVE WORKED. THEY WROTE OUT THE CALLBACK, WHEREAS I PASSED IN THIS.MOVE() WHICH HAD THE CHECK FOR VALID MOVE
        // 2. CHECKING IF THE GAME WAS WON WAS MOSTLY CORRECT THOUGH. I MISSED THE READER ARGUMENT IN THE RUN FUNCTION. DIDN'T PRINT OUT THE BOARD IN THE GAME IS OVER SECTION

    //     this.promptMove(this.move())

    //     if(!this.isWon()){
    //         // the game isn't over yet
    //         this.run(completionCallback)
    //     } else {
    //         // the game is over
    //         console.log("You've won!")

    //         // this will be where the user is prompted to play again
    //         completionCallback()
    //     }
    // }
}   


module.exports = Game;

const game = new Game(3)

game.run(reader, completion)

function completion() {
    reader.question("Play again? y or n: ", restart => {
        if(restart === "y") {
            g = new Game(3);
            g.run(reader, completion)
        } else {
            console.log("Goodbye!")
            reader.close()
        }
    })
}