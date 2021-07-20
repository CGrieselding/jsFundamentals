/*
    DATA and STRUCTURE TYPES

        - Primitive Data Types:
            - boolean
            - undefined
            - string
            - number
            - bigInt (FYI dont have to worry about as much because it doesn't come up often)
            - symbol (FYI dont have to worry about as much because it doesn't come up often)
        - null
        - Object
        - Function
*/

/*
    BOOLEAN
        - A boolean has two possible values: TRUE or FALSE
        - Think of it like a "light switch"
*/

let on = true;
let off = false;

console.log(on); // Answer: true
console.log(off); // Answer: false

/*
    NULL
        - A null value is an EMPTY value.
        - Think of it as an empty container that has space to fill.
        - SIDENOTE: null and undefined are 2 different things.
*/

let empty = null;
console.log (empty); // Answer: null
                     /* null is useful when you need to reset something. Lets say you log in to your bank account online. Since you
                     were logged in at one point and your info was displayed on the screen, it will still be there. However, you can
                     assign a variable as null and it will reset/delete it. */

/*
    UNDEFINED
        - No value has been assigned to a container and doesn't even act as an empty container.
*/

let unknown
let undef = undefined;

    // What's the difference between null and undefined?
    /*
        - null is like a container with nothing in it
        - undefined is a variable that has never been set, or it hasn't been created yet
    */

/*
    NUMBERS:
        - Literally just numbers
*/

let degrees = 82;
console.log(degrees);

let precise = 999999999999999;
console.log(precise); // Answer: *sixteen 9's*

let rounded = 9999999999999999;
console.log(rounded); // Answer: 1000000000000000 (Once you get past 15 digits, JavaScript rounds the number up)

let notQuite = 0.2 + 0.1;
console.log(notQuite);

let whatIf = (0.2 * 10 + 0.1 * 10) / 10;
console.log(whatIf); // Answer: 0.3 - OF NOTE: JavaScript does NOT like decimals or long numbers

/*
    STRINGS
        - Strings represent text and are wrapped in either single or double quotes.
*/

let doubleQuote = "Double Quote";
let singleQuote = 'Single Quote';
console.log(doubleQuote);
console.log(singleQuote);

let bothQuotes = 'I said, "How cool is that?"';
let bothQuotesAlt = "I then said, 'It is pretty cool right?'";
console.log(bothQuotes);
console.log(bothQuotesAlt);

const contractions1 = "now you can't run into any issues"; // Example is using double quotes
const contractions2 = 'now you can\'t run into any issues'; // Example is using single quotes (make sure to include backslash)
console.log(contractions1);
console.log(contractions2);

    // Numbers and Strings

    let addThese = 1050 + 100;
    console.log(addThese);

    let addTheseAlso = '1050' + '100';
    console.log(addTheseAlso) // Answer: 1050100 (it just puts the two numbers next to each other)

    // We can use an operation called 'typeof' to return a string of the variables type

    console.log(typeof addThese); // Answer: numbers
    console.log(typeof addTheseAlso); // Answer: strings

    let addTest = 1050 + '100';
    console.log(addTest); // Answer: 1050100 (again)

/*
    OBJECTS
        - Objects are used to store many values instead of just one.
        - Consider them as a collection of different variables in one container.
        - Denoted by curly brackets: {}
*/

let frodo = {
    // an object has many properties inside of it
    race: 'Hobbit', // the word hobbit is a string in this example
// name : value
    // we must separate properties in an object with a comma
    rings: 1, // the number 1 is a number in this example
    string: true // this is a boolean
}
console.log(frodo);
console.log (typeof frodo); // Answer: object
console.log (frodo.rings); // Answer: 1 (this is a Dot Notation example)

/*
    ARRAYS
        - Arrays are containers that hold a list of items denoted by square brackets: []
        - All items are within the square brackets regardless of the data type, all items are separated by commas      
*/

let arrayList = ['position 1', 'position 2', 'position 3'];
console.log(arrayList);

let anotherExample = ['muffins', 'pizza toppings', true, 17, false, null, undefined];
console.log(anotherExample); // an array will hold anything you put in the brackets

console.log(typeof anotherExample); // Answer: object (an array is technically an object in JavaScript, BUT th

/*
    ADDITION vs CONCATENATION
    
    JavaScript sees the + symbol in two different ways:
        - When we use it with numbers, it will use the built-in math functionality
        - When we use it with strings, it will ignore the math functionality and concats, or combines, the two strings into one
*/

let strings = 'one' + ' ' + 'is a number';
console.log(strings);

let concatDiff = 1050 + '100';
console.log(concatDiff); // Answer: 1050100 
console.log(typeof concatDiff); // Answer: string

// CHALLENGE!

let firstName = 'Cameron';
let lastName = 'Grieseling';
let houseNumber = 1115;
let aptNumber = 123;
let street = '61st Street';
let city = 'Indianapolis';
let state = 'Indiana';
let zipcode = 46220;

console.log(firstName, lastName + ',', houseNumber, aptNumber, street + ',',
            city + ',', state, zipcode);

/*
    STRING: PROPERTIES
    
        - Properties are qualities associated with a data type
        - strings have properties, or qualities, associated with them
        - The length of a string is a property
*/

let myName = 'Cameron';
console.log(myName.length); // Answer: 7 - this is telling you that are 7 characters in the myName variable (my name)

/*
    STRING: METHODS

        - methods are tools that can help us manioulate data
        - .property is NO parenthesis
        - .method() is parenthesis
*/

let myNameIs = 'Cameron';
console.log(myNameIs.toUpperCase()); // Answer: CAMERON - OF NOTE: you don't need to put anything in parenthesis after toUpperCase

let home = 'My home is in Indianapolis';
console.log('Includes Method:', home.includes('Indianapolis')); // Answer: true (because it searched for the word "Indianapolis" in the home variable)

// CHALLENGE!

let sent = 'This sentence will be split into individual parts';
let sent2 = sent.split(' ');
console.log(sent2);