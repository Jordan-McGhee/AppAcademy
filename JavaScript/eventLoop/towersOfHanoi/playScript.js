const Game = require("./hanoiGame.js").default;

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})


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