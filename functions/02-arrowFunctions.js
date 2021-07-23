/*
    ARROW FUNCTIONS

    Arrow functions are expressional functions that can be simplified into one of two forms:
        - Concise body
        - Block body
    The main goal is to generate shorter syntax for writing a function.
*/

// Regular Function
function regFunc(){
    console.log('just a regular function');
}
regFunc();

// Arrow Function

//    (1)      (2) (3)                      (4)
let arrowFunc = () => console.log('function in one line');
arrowFunc();

/* In above example:
    (1): A variable created to hold the value of our anonymous arrow function.
        - Arrow functions are ALWAYS anonymous.
    (2): Parameters are still capable of being added.
        - Parameters got in the () as they would with a normal function, BUT if we only have 1
        paramter (no more or less), we do NOT need (). If we have no parameters  we are still
        required to put ().
    (3): "How we see an arrow". This is the JS syntax that says we are about to process a function.
    (4): The code the arrow function will run/execute.
*/

let arrow = (x) => console.log(x);
arrow(10); // Answer: 10

/*
    ARROW FUNCTIONS -- **CONCISE BODY**

    When we have a simple return, or response, from our arrow function, it makes sense to write it in a concise,
    simplified way. When we use a concise body arrow function, the "return" statement is simplified (meaning we do not have to write it).    
*/

let conciseBody = (x,y) => console.log(x + y);
conciseBody(1,2); // Answer: 3

let conciseBody = (x,y) => x + y
console.log(conciseBody(1,2)); // Answer: 3 -- in this example the "implied return" is x + y

// Another Example!

let slightlyComplexConcise = (x,y) => x > 2 && y < 2 ? console.log(`${x} is greater than 2 and ${y} is less than 2`) : console.log(`${x} and ${x} are where we want them`);

slightlyComplexConcise(3,1); // Answer: 3 is greater than 2 and 1 is less than 2
                             // 3 > 2 is true and 1 < 2 -- so these are both TRUE and would result as mentioned above

slightlyComplexConcise(3,3); // Answer: 3 and 3 are where we want them

/*
    ARROW FUNCTIONS -- **BLOCK BODY**

    In a block body the 'return' keyword IS required. We will include curly braces {}.
    Sometimes it will make sense to use block body if we need to do mulitple lines of code
*/

let blockArrow = (x,y) => {
    return `${x} and ${y} are in a block body arrow function`   // OF NOTE: ANY code below the "return" in a function will be ignored.
}

console.log(blockArrow(1,2)); // Answer: 1 and 2 are in a block body arrow function

// Another Example!

let blockArrow = (x,y) => {
    return `${x} and ${y} are in a block body arrow function`
}

let blockResponse = blockArrow(1,2);

console.log('RESPONSE:', blockResponse);

// CHALLENGE!

let hero = 'Robin Hood';
let nock = 1;

let shot = (x,y) => y < 3 ? console.log(`${x} only shot ${y} arrow...`) : console.log(`&{x} shot ${y} arrows at the target!`);

shot(hero,nock);

/* CHALLENGE v2! 

Using a block body, pass the same variables
but increase the number of shots until the second console.log is printed. */

let hero = 'Robin Hood';
let nock = 1;

let shot = (x,y) => {
    for(y ; y <= 3; y ++){
        console.log('y:', y);
        if(y < 3){
            console.log(`${x} only shot ${y} arrow...`)
        } else {
            console.log(`${x} shot ${y} arrows at the target`)
        }
    }
}

shot(hero, nock);