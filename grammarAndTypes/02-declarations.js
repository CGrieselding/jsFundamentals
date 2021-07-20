/*
    What is a variable?

    Variables are named containers for sorting data.
    We can think of these containers as resources we can call upon later. Each variable allows us
    to store data, which could be a value or a function, that we will want to reference back to.
 */

let a = 2;

/*
    - "let" is a our KEYWORD.
    - "a" is our NAME of our variable.
    - "=" is our ASSIGNMENT OPERATOR.
    - "2" is our variables VALUE.
*/

let b = 1;
console.log(a + b); // What should we get? Answer: 3

/*
    Restrictions with variables

    - a variable must begin with a letter, underscore, or dollar sign.
    - number may follow the above characters, but CANNOT come first in the name.
    - JavaScript is case sensitive - 'hello' and 'Hello' are different variables.
    - no spaces are allowed in variable names
    - camelcase is best practice for naming variables in JavaScript. This will help keep names of variables readable.
        ex: let myName = 'Cameron'; is easier to read than let myname = 'Cameron';

*/

let startingWithLetter = 'test';
let _startingWithUnderscore = 'test';
let $startingWithDollarsign = 'test';
// let 5startingWithNumber = 'Breaks'; // CANNOT start a variable name with a number (the number 5 in this example)
// let -startingWithDash = 'Breaks'; // CANNOT start a variable bname with a dash

console.log (startingWithLetter, _startingWithUnderscore, $startingWithDollarsign);

// CTRL + ALT + n will run code runner (Windows)
// CTRL + option + n will run code runner (Mac)

/*
    KEYWORDS:
    var, let, const

        - var: the 'old' keyword for variables. We will not use this much but it is still used depending on the
        project and when it was made. We will focus on let and const.

        - let: the 'new' keyword for variables, which was introduced in ES6 *newest version of ECMAScript, which is
        a standardization of JavaScript.

        - const: also a 'new' keyword for variables. It declares an unchangeable, or constant, variable. The only limit
        to const variablesis that once they are declared/assigned their value will NEVER change.

*/

var variable = 'var variable';
let letVariable = 'let variable';
const constVariable = 'cont variable';

console.log(variable, letVariable, constVariable);


/*
    Declarations are the LEFT SIDE of the assignment operator (=) within a variable.
        - let x

    Initializations are the RIGHT SIDE of the assignment operator (=) and sets the value of the variable.
        - let x = 10

        10 would be the initialization in the above example
*/

let x;
console.log('Declaration:',x); // This is useful because you've already created the container and you may use it later.

x = 10
console.log('Initialization1:',x);

x = 33;
console.log('Initialization2:', x); // We can "re-intialiaze a let varible whenever we want"

let y = 'Hello';
console.log('Both:', x, y); // What will this be? Answer: "Both: 33 Hello" (This is because 33 was the last assigned value to x).

let today = 'Great!';
const efa = 'Wonderful!';
console.log(today, efa); // What will this be? Answer: Great! Wonderful!

today = 'Awesome!';
console.log(today, efa); // What will this be? Answer: Awesome! Wonderful!

efa = 'Super!';
console.log(today, efa); // What will this be? Answer: ERROR (This is because a const variable CANNOT be reinitialized from Wonderful to Super).

const example; // This is an ERROR - This is because when you declare a const you HAVE TO give it a value (in other words you need it to = something).
example = 'Testing';
console.log(example);