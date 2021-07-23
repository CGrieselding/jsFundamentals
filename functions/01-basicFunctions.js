/*
    FUNCTIONS

    Functions are processes that we call upon to run an action. In other words, functions are variables "that do things".
    They can do the following:
        - Take in an input to process, modify, or respond to (not required though)
        - Return a value (not required though)
        - Can be invoked (or called) as often as needed
*/

function hi(){
    // code goes inside curly braces
}

/* In above example:
    - function keyword - we use this to define a function (or to run the function code)
    - name of the function, followed by parenthesis - ("hi()" in the above example) this is how we will
    call the functions
        - **"hi()" is calling the function** - in order to invoke (call) a function, we will simply write
            it's name and put parenthesis after it
    - code goes inside the curly brace {} - this will be the "brains" of the function
*/

function hi(){
    console.log('Hi!');
}

hi() // By typing this "hi()" later in the document, it will pull from the function above (which has already been defined) and you should see Hi!

// What if we console.log() a function?
console.log(hi()); /* Answer: Hi! AND undefined
                        When we console.log a function, JS will first evaluate the fucntion, meaning it will run all
                        of the code and look for a value from it. IF we do not have a return statement within the
                        function, we will get back undefined. */

let myName = 'Cameron';

function myNameCap(){
    myName = myName.toUpperCase();
}

myNameCap();

console.log(myName);

/*
    FUNCTION DECLARATION

    A function declaration is a chunk of code that performs a set chunk of code when it is invoked (or called)
*/

function funcOne(){
    console.log('This is the code that we fun in functions one.');
}

funcOne() // We invoke (or call) a function by writing it's declared name followed by parenthesis

// What if we console.log(funcone)? - funcOne will still refer to the function, but without () it will not invoke

/*
    FUNCTION EXPRESSIONS

    - Assigning a function to a variable is what we call an expression
    - In other words - instead a value defining a variable, a function will define a variable
*/

let first = function funcTwo(){
    console.log('Code being run in the function expression');
}

first(); // To be able to view the above console.log, we need to invoke (or call) "first()" because this was defined with a function
         // If you tried just funcTwo(), it gives you an ERROR because funcTwo is after the assignment operator (=) so it wasn't declared yet


let example = function(){
    console.log('What is my name?');
}

example() // Answer: What is my name? --> same reasoning as the above example

/*
    ANONYMOUS FUNCTIONS

    Anonymous functions are stored in memory but the runtime does not automatically create a reference to it.

    The main use would be to pass these functions through another function. Maybe have a ternary, where if something is true
    we run one function, else we run a different function.

    Common use of a anonymous function would be to assign these to a variable (as shown below)
*/

let anon = function(){    // NOTICE: There is nothing after function, it's just the ()
    console.log('Anonymous Function');
}

anon();

true || false ? function(){console.log('true')} : function(){ // This is just an example of writing anonymous functions (this one won't produce anything)
    console.log('false')
}

/*
    PARAMETERS

    We will be using functions to pass information and return a result.

    Parameters will allow our functions to take in outside information.
*/

function parameterFunc(num){
    console.log(num);
}

parameterFunc(7); // Answer: 7

parameterFunc('Jimmy Crack Corn') // Answer: Jimmy Crack Corn - the "num" (which can be any word/doesn't have to be "num") serves as a parameter/holding spot and you can make anything show up (string, number, etc.)
                                  // So you could use it as a holding spot and then invoke/call it later with whatever is in ().


function parameterFunc(num){
    console.log(num + 1);
    return num + 5;  // *First time seeing "return " - sends back a value for the function when it is run
}

// Return will essentially set the function = to something -- In the example above: "return num + 5" recalls/redefines the originally num as "num + 5"

let returnTest = 5;
parameterFunc(returnTest); // Answer: 6 - b/c you would do 5 + 1
console.log(parameterFunc(returnTest)) // Answer: 10
console.log('RETURN:', returnTest) // Answer: RETURN: 5


let firstName = 'Jane';
let lastName = 'Doe';

function greeting(first, last){
    console.log(`Hi, ${first}! Welcome back!`);
    console.log(`This is the first parameter: ${first}`);
    console.log(`This is the last parameter: ${last}`);
}

greeting(firstName); /* Answer: Hi, Jane! Welcome back!
                        This is the first parameter: Jane
                        This is the last parameter: undefined */

greeting(lastName); /* Answer: Hi, Doe! Welcome back!
                       This is the first parameter: Doe
                       This is the last paramater: undefined
                       ** This is because "lastName" is in the first position of the function (aka first in this example), so it
                        fill out "Doe" wherever first is */

greeting(firstName, lastName); /* Answer: Hi, Jane! Welcome back!
                                  This is the first parameter: Jane
                                  This is the last parameter: Doe
                                  ** This would be the way we want to write it! */