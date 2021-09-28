// Some tea? Some biscuits?
// Now let's move over to the node environment. Create a new javascript file to run in node.

// We are going to write a simple function that asks a user if they'd like tea and biscuits. Chronologically, your function should:

// Ask the user if they'd like tea.
// console.log their response.
// Ask the user if they'd like biscuits.
// console.log their complete response: So you ${firstAns} want tea and you ${secondAns} want coffee.
// Close the reader.

const readline = require('readline');

const reader = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

function teaBiscuits() {

    reader.question("Would you like some tea?", (res) => {
        console.log(`You replied ${res}`)

        reader.question("Would you like some biscuits?", (res2) => {
            console.log(`You replied ${res2}`)

            const first = (res.toLowerCase() === "yes") ? 'do' : "don't";
            const second = (res2.toLowerCase() === "yes") ? 'do' : "don't";

            console.log(`So you ${first} want tea and ${second} want biscuits?`)
        })
    })
}

teaBiscuits()