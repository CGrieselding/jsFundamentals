/*
    LOOPS

    Loops allow us to go over a block of information or code in a determined amount of cycles.
    It's important to note that it is possible for us to write code without declaring an endpoint.

    Loops help us repeat a process without writing a lot of code.
*/

/*
    STRUCTURE

    We have to set up our loops in a way that we can
        1) See where we are in a loop.
        2) Consider what sort of condition we want to run it against, and
        3) Note when we are done with that condition and move on to the next iteration.
    
    We need to:
        1) Create an Index
        2) Run a Condition
        3) Change to the indexing variable (execution of condition)
*/

// Example: Let's count to 10

for(let i = 0; i <= 10; i++){
    console.log(i);
}

/*
    In the above example: We state our loop with a "for". Within this function, we are injecting some
    parameters that JS will run against. index; condition, change index --> result.

    Within parameters, we are stating our index declaration to 0. This is our baseline. We move on to asking
    if that variable is less than or equal to the number 10, take that set number and add 1 to it. Once that 
    is processed, return that value (in this case "console.log" of that number). Once our condition is met,
    we return a FALSE which end our loop.

    This is IMPORTANT to note:
    for(<create an index variable>; <run condition>; <change index>){
        <return results>
        <continue until the condition is met>
    }

*/

// NOTE: If you don't indicate what our condition is, the loop will not have a finish line and thus run until we have to force close it.

/*
    INFINITE LOOP

    for(let i=0; i++){      // This code will run forever and ever and ever. You will have to push CTRL + C to stop it.
        console.log(i);
    }
*/

// NOTE: No condition means that JS doesn't know when to stop and will never assume that information on its own.

// CHALLENGE!

for(let i = 2; i > -10; i -= 4){
    console.log(i);
}

// We are not limited by positive or negative numbers. We can cycle through variables assigned with strings.

let word = "Supercalifragilisticexpialidocious"

for(let b = 0; b < word.length; b ++){
    // .length (see above) is a method we can use in JS that helps determine a value we do not know.
    console.log(b, word[b]);

    /* 1) We set a value of each index and are displaying that.
       2) We set to display that value within the "object" of word. Each character that is assigned to the variable
          of "word" is provided an index value and this is how we are cycling through it.
    */

    console.log(`The letter ${word[b]} is in position: ${b}`);
}

/*
    FOR IN LOOPS

    - With "FOR LOOPS" we are seeking an index value and running it against a condition.
    - "FOR IN LOOPS" do NOT require an index number.
*/

let city = {
    name: 'Indianapolis',
    population: 877000,
    speedway: true
}

for(info in city){
    console.log(info) // Answer: name population speedway -- In this example: we are saying we want to see all the properties/keys.
                      // OF NOTE: You can actually name the first variable (in this ex: "info") anything you want. We are still saying we want to see all the properties/keys, thus it would be the same answer.
    console.log(city.info); // WRONG - city.info looks for city = {info: 'value'}
    console.log(city.name);
    console.log(city["name"]); // Answer: Indianapolis
    console.log(city[info]); // Answer: name Indianapolis population 877000 speedway true
}                     

/*
    for(variable in object){
        *run code *
    }
*/

let list = ['milk', 'eggs', 'lunch meat', 'bread', 'bananas'];

for(item in list){
    console.log(list); // Answer: 0 1 2 3 4 - because an array is an object and those are their position #'s in the array.
    console.log(list[item]);
}

// CHALLENGE!

let myName = 'dwiGht';

for(let i = 0; i < myName.length; i++)
    // OR you can do -> for(let i = 0; i <= myName.length - 1; i ++)
    // console.log(myName.split(''));
    // console.log(myName[i]);

if(i === 0){
    console.log(myName[i].toUpperCase());
} else {
    console.log(myName[i].toLowerCase());
}

// HERE IS ANOTHER WAY TO DO IT!

let myName = 'dwiGht';
let propCase;   // This is an empty variable

for(let i = 0; i < myName.length; i++)

if(i === 0){
    propCase = myName[i].toUpperCase();  // This gives the propCase variable an assignment of capital "D"
} else {
    propCase += myName[i].toLowerCase(); // This is ADDING to the propCase variable the another assignment
                                             // Answer: 'D' 'Dw' 'Dwi' 'Dwig' 'Dwigh' 'Dwight'
}
console.log(propCase);


//    FOR IN VERSION (same example as above)

let myName = 'dwIght';
let propCase;

for(index in myName){     // We used a ternarie here just to show another way to do it. You could also have done "if else" like the one above.
    index == 0 ? propCase = myName[index].toUpperCase() :
    propCase += myName[index].toLowerCase();
}

console.log(propCase);

/*

    FOR OF LOOP

    In order to run a FOR OF LOOP, the 'thing' must be numbered like an array
*/

let myObject = {
    string: 'Peter',
    boolean: true,
    number: 1
}

for(item of myObject){
    console.log(item); // Answer: ERROR - because each of these are OBJECTS they do NOT have numbers assigned to them like arrays do
}
// The correct way to do it below!

let indexArray = ['spot 1', 2, true, 'not fifth']; // These are now held in an array (b/c of the [])

for (let pos of indexArray){
    console.log(pos, 'was run through a "for of" loop');
}

/*
    for(variable of iterable){
        *code goes here*
    }

    OF NOTE: an iterable is something that has numbers assigned to it like an array, where the first
    item is assigned to 0, the second a 1, and so on .. (ex. Arrays, Strings)
*/

// Another example of a FOR OF LOOP below

let officeCharacters = ['Dwight', 'Michael', 'Jim', 'Stanley', 'Pam'];

for(worker of officeCharacters){
    if(worker === 'Dwight' || worker === 'Michael'){
    console.log(worker, 'works in the office.')
    }
}

if(worker === 'Jim' && worker !== 'Dwight'){    // OF NOTE: Here we are saying worker is equal to 'Jim' AND worker (which is 'Jim') is not equal to 'Dwight', which is true!
    console.log('Bears. Beets. Battlestar Galactica.'); // Since both of the if's above are TRUE we should see an answer of Bears. Beets. Battlestar Galactica.
}

// CHALLENGE!

for(let x = 1; x <= 100; x ++){
   if(x % 3 == 0 && x % 5 == 0){
       console.log('FIZZ BUZZ');
   } else if(x % 3 == 0){
       console.log('FIZZ');
   } else if(x % 5 == 0){
       console.log('BUZZ');
   } else console.log(x);
}



for(let num = 0; num <= 10; num ++){
    if (num % 2 == 0){
      console.log('The number is even.');
    } else if (num % 2 == 1){
      console.log('The number is odd.');
    } else {
      console.log('What is this?');
    }
  }


let callback = (num) => {
    if(num % 2 == 0){
      console.log('The number is even.');
      } else if (num % 2 == 1) {
          console.log('The number is odd.');
      } else console.log('What is this?');
  }

  callback(17);

for(let num = 0; num <= 10; num ++){
    if (num % 2 == 0){
      console.log(`${num} The number is even.`);
      } else if (num % 2 == 1){
        console.log('The number is odd.');
      } else console.log('What is this?');
    }