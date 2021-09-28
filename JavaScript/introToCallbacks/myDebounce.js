// myDebounce
// Like myThrottle, a debounce function is another way of restricting function invocations. In a debounced function, the specified interval represents how much time must pass without the debounced function being invoked, before the original function is invoked automatically. Essentially, each time the debounced function is invoked, it resets a countdown (setTimeout). If the countdown completes before the debounced function is invoked again, it will invoke the original function. To better understand debounced functions, consider the following example:

// We have a SearchBar class that stores a query string. Every time the user calls SearchBar#type with a letter, the new letter is added to the query, and the search function is invoked to "search" for the query:

class SearchBar {
    constructor() {
        this.query = "";

        this.type = this.type.bind(this);
        this.search = this.search.bind(this);
    }

    type(letter) {
        this.query += letter;
        this.search();
    }

    search() {
        console.log(`searching for ${this.query}`);
    }
}

// Below, we create a new SearchBar, and write a function that will "type" all of the characters in the string "hello world". Test out the following code:

const searchBar = new SearchBar();

const queryForHelloWorld = () => {
    searchBar.type("h");
    searchBar.type("e");
    searchBar.type("l");
    searchBar.type("l");
    searchBar.type("o");
    searchBar.type(" ");
    searchBar.type("w");
    searchBar.type("o");
    searchBar.type("r");
    searchBar.type("l");
    searchBar.type("d");
};

// queryForHelloWorld();

// When we run the queryForHelloWorld function, we "type" each character in the string "hello world", and execute a new search every time a new character is added. This is a good way to show "live" results to our user (they don't have to press enter or click a button), but executing a search every time can be incredibly inefficient. A much better solution would be to execute a search whenever we think the user has stopped (or paused) typing. A common way to achieve this functionality is by making a debounced version of our function:

// Function#myDebounce accepts an interval as an argument and returns a "debounced" function
// when the debounced function is invoked, it sets a timeout that will invoke the original function after interval milliseconds have elapsed
// if the debounced function is invoked early, it resets the timeout
// Write your own myDebounce function on the Function.prototype. It should take an interval as an argument and return a "debounced" version of the original function. Using Function#myDebounce, we should be able to make SearchBar#search only execute once it hasn't been executed for at least 500ms:

Function.prototype.myDebounce = function(interval) {
    // set variable outside of returned function
    let timeOut

    // return a function that takes an arbitrary number of args
    return (...args) => {

        // declare a function that sets timeOut to null and invokes the called function (this) with args
        const fnCall = () => {
            timeOut = null;
            this(...args)
        }

        // each time this function is called, it will clear the previous timeout
        // and create a new one that invokes fnCall after the interval has passed
        // since the timeout is reset every time the function is invoked, 
        // fnCall will only be called once the interval has passed without any new 
        // invocations
        clearTimeout(timeOut)
        timeOut = setTimeout(fnCall, interval)
    }
}

searchBar.search = searchBar.search.myDebounce(500)

queryForHelloWorld();