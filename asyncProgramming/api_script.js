const baseUrl = "https://api.spacexdata.com/v2/rockets";

const searchForm = document.getElementsByTagName('form')[0];
const spaceShips = document.querySelector('ul'); // this would only get the first <ul> tag (reading page top to bottom)
                                            // Another exmaple: if 'div' was in the paranthesis, they it would only get the first <div> tag
        

searchForm.addEventListener('submit', fetchSpace)

/*

    NOTICE: we have called/invoked the "fetchSpace" callback function, but haven't defined it yet. We plan to do this down below.

    ** HOISTING MINI LESSON **

    JavaScript will compile code reading from top to bottom, BUT it actually reads code twice. The first time it reads code, it will store
    anything in memory such as: variable names, functions (when using the keyword), etc.

    Here are some examples:

console.log(fetchSpace(1)); // This is an example of hoisting a function
console.log(myVar1); // Answer: error - This is because we cannot access before initialization. In other words, we tried to access a "let" variable before we defined it
console.log(myVar2); // Answer: undefined
myfunc(); // Answer: error - Again, this is because we tried using a "let variable" (line 26) and it has not been defined yet

let myVar1 = 'Awesome';
var myVar2 = 'Not Awesome?';
let myfunc = () => {console.log('Arrow test')};

OF NOTE: You can successfully hoist if you are using the "function" method. You CANNOT use "let" or "var".

*/

function fetchSpace(e){
    e.preventDefault(); // NOTE: this will stop the page from reloading/refreshing everyt time we submit our form. It prevents a default actions by the browser.

    console.log('Clicked!');

    fetch(baseUrl)     // NOTE: this starts the process of 'fetching', or getting, information from our resource.
    // .then( *a function will go here* ) - in the below example we named our arrow function 'result'
    .then(result => {           /* When we have a promise, we can call a method called  'then()'. This will be given
                                a callback function to sent the result into. */
        console.log(result);
        return result.json();   /* This will json-ify, or translate our result into json, which will be more easily
                                readable and accessible within our app.
                                - .then() also returns a promise, meaning if we want to continue to run code after one
                                is done, we can just add another .then(). (see below)*/
    })
    .then(json => {
        // console.log(json);
        displayRockets(json)
    })
}

function displayRockets(data){
    console.log('Inside displayRockets:', data);

    /* How can we get each rocket's name to show up in the ul
       OR
       How can we get each rocket's name to show up in the console */
    
    data.forEach(rocket => {
        console.log(rocket.name);
        let listItem = document.createElement('li'); /* This creates a new element in the HTML file. In this example, we
                                                        created an empty <li></li> tag. */
        listItem.innerText = rocket.name;  /* This changes the text of the item. The tag now looks like
                                            this: <li>rocket name</li> */
        spaceShips.appendChild(listItem)  /* This will add one of our tags into another tag. In this example, we
                                    adding listItem into the <ul> (spaceShips) */
        /* container.appendChild(itemInContainer) */
    })
}



/* OPTIONAL CHALLENGE!

    - Add a table to the HTML page and comment out the ul
    - Comment out the aboe forEach loop and make a new one
    - Make a new row in the table for each rocket
    - Inside of each new row, add the name and cost of the rocket
*/
