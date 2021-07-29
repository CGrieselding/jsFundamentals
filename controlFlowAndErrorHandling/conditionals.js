/*
    CONDITIONALS

    FALSY VALUES
        A falsy value is a value that is considered false when encountered in a boolean context.
        There are 6 falsy value in JavaScript:
            - false
            - 0
            - "", '', ``
            -null
            -undefined
            - NaN (not a number)
    

    What does this mean? Whenever JavaScript is expecting a boolean value and is
    given one of these 6, it is evaluated as false.

    OF NOTE: There are also truthy values in JavaScript, which tend to be much less
    limited. Examples include:
        - true
        - {}
        - []
        - 42 (aka any number)
        - 3.14 (aka any decimal)
        - "false" (aka any string)
*/

/*
    IF STATEMENTS
    
    When we use comparison operators, we typically are asking if we can move on to the next section of
    code. "If" something is true, do "this thing".
        Ex: If you fill out your email in this subscription box, we will send you a monthly email.
*/

if(true){                      // In this example: if = KEYWORD & true = EXPRESSION
    console.log('Truthy Test');
}

if (false){
    console.log('Falsy Test'); // Answer: *empty*
}

let light = 'on';
if (light = 'on'){
    console.log ('The light is on'); // Answer: The light is on
}

let light = 'off';
if (light == 'on'){
    console.log ('The light is on'); // Answer: *empty* - because we declare light is off in line 50. In line 51, we use the == (to compare) - we compare off and on, which are not the same value so nothing shows up. 
}

let weather = 65;
if(weather < 70){
    console.log('Maybe wear a jacket'); // Answer: Maybe wear a jacket  - because 65 is less than 70 (so its true)
}

let weather = 65;
let rain = true;
if(weather < 70 && rain == true){
    console.log('Maybe wear a jacket'); // Answer: Maybe wear a jacket - OF NOTE: we declare rain is true in line 61. So in line 62, we compare rain (which is true) to true, which is the same so "Maybe wear a jacket" shows up.
}

// CHALLENGE!

let batman = 'is the night';
let bruce = true;

if(batman == 'is the night' && bruce){
    console.log('BATMAN!'); // Answer: BATMAN! - this is because batman does equal 'is the night' and bruce is already true. Both are true, so it results in BATMAN!
}

/*
    IF ELSE

    We can think of this as not only providing an answer if our condition evaluates to be true,
    but also one if it ends up being false.
*/

let today = 75;
if (today < 70){
    console.log(`It's ${today}, wear a jacket`); // This is an example of STRING INTERPOLATION - String interpolation ONLY works using back ticks ``
} else {
    console.log(`It's ${today}. Not jacket needed!`);
}

/*
    ELSE IF

    This is a condition that will be checked if the above condition was not met.
*/

let cooktime = 40;
if(cooktime === 45){
    console.log('Let us feast!');
} else if(cooktime > 45){
    console.log(`It has been ${cooktime}?? Might need a glass of water with this one!`);
} else if(cooktime  >= 30){
    console.log(`It has only been ${cooktime} minutes. Wait another 5-15 minutes.`);
} else if(cooktime >= 20){
    console.log(`It has only been ${cooktime} minutes. Wait another 10-25 minutes.`);
} else {
    console.log(`It has only been ${cooktime} minutes. Perhaps we could  at least try cooking it...`);
}

// CHALLENGE!

let age = 28;
if(age <= 17){
    console.log(`Sorry, you're too young to do anything`);
} else if (age >= 25){
    console.log(`You can rent a car!`);
} else if (age >= 21){
    console.log(`You can drink!`);
} else if (age >= 18){
    console.log(`You can vote!`);
}

/*
    TERNARIES

    They are if/else statements, but they look weird!
*/

let myName = 'Cameron';

if(myName === 'Cameron'){
    console.log(`Hi, ${myName}!`);
} else {
    console.log(`Not sure I know ${myName}.`);
}

// condition ? if true : else result

myName === 'Cameron' ? console.log(`Hi, ${myName}!`) : console.log(`Not sure I know ${myName}.`);
/* In the above example:
    - condition = myName === 'Cameron'
    - add ? **separates condition from the if true**
    - if true = console.log(`Hi, ${myName}!`)
    - add : **separates if true from the else result**
    - else result = console.log(`Not sure I know ${myName}`.)
*/

let hero = 'Batman';
let villain = 'Mr. Freeze';

hero  == 'Batman' && villain == 'Riddler' ?
console.log('What has a head and a tail, but no body?') : 
hero == 'Batman' && villain == 'Joker' ? 
console.log('Why so serious?') :
hero == 'Batman' && villain == 'Mr. Freeze' ?
console.log('Ice to meet you!') :
console.log(`${hero} is the night!`);

// CHALLENGE!

let lampOn = false;
let daytime = true;

lampOn == true && daytime != true ?
console.log('The lamp is on during the night') :
lampOn != true && daytime != true ?
console.log('The lamp is off during the night') :
lampOn == true && daytime == true ?
console.log('The lamp is on during the day') :
lampOn != true && daytime == true ?
console.log('The lamp is off during the day') :
console.log('What lamp?');

/*
    SWITCH STATEMENTS

    The switch statement executes a block of code depending on different cases
*/

let instructor = 'Jerome';

switch(instructor){
    case 'Jerome':   // This is going to check if instructor === 'Jerome'
        console.log(`${instructor} is a part of the Web Development Team`);
        break;
    case 'Summer':
        console.log(`${instructor} is a part of the Web Development Team`);
        break;
    case 'Josh':
        console.log(`${instructor} is a part of the Software Development Team`);
        break;
    default: // this default: is similar to the else
        console.log(`Sorry, I can't find what ${instructor} teaches at this time`);
}

let staff = 'Jerome';

switch(staff){
    case 'Jerome':
    case 'Summer':
    case 'Levi' :
    case 'Adam' :
    case 'Hustin' :
        console.log(`${staff} is a part of the Web Development Team`);
        break;
    case 'Josh' :
    case 'Amanda' :
    case 'Casey' :
    case 'Junior' :
        console.log(`${staff} is a part of the Software Development Team`);
        break;
    default:
        console.log(`Sorry, I can't find what ${staff} teaches.`);
        break;   // You can put this break here, but since the last one was a default you don't technically need it
}

let switchConditional = true;

switch(typeof swtichConditional == 'string' || typeof switchConditional == 'boolean'){
    case true:
        console.log(`${switchConditional} is a string or boolean!`);
        break;
    default:
        console.log(`${switchConditional} is NOT a string or boolean!`);
}
    /* In example above: When we use || (or) only one side of the || needs to be true for the expression
        to be true.

        When we use && (and) BOTH sides of the && need to be true for the expression to be true */

// CHALLENGE!

let grade = 75;

switch(true){
    case grade >= 89:
        console.log(`The student got a ${grade} on the test, so they received an A.`);
        break;
    case grade >= 79:
        console.log(`The student got a ${grade} on the test, so they received a B.`);
        break;
    case grade >= 66:
        console.log(`The student got a ${grade} on the test, so they received a C.`);
        break;
    case grade >= 59:
        console.log(`The student got a ${grade} on the test, so they received a D.`);
        break;
    case grade >= 0:
        console.log(`The student got a ${grade} on the test, so they unfortunately failed.`);
    default:
        console.log(`Please insert a recognized value.`);
}

// CHALLENGE!

let character = "";

character === 'Michael' ?
console.log('That\'s what she said!') :
character === 'Dwight' ?
console.log('It\'s not weed! It\'s hemp!') :
character === 'Jim' ?
console.log('Bears, Beets, Battlestart Galactica.') :
console.log('*slow camera zoom*');


let character = "";

switch(character){
    case 'Michael':
        console.log('That\'s what she said!');
    break;
    case 'Dwight':
        console.log('It\'s not weed! It\'s hemp!');
    break;
    case 'Jim':
        console.log('Bears, Beets, Battlestart Galactica.');
    break;
    default:
        console.log('*slow camera zoom*');
}