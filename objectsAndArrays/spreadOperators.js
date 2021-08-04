/*
    SPREAD OPERATOR
*/

const nameOne = ['Summer', 'Jerome'];
const nameTwo = ['Adam', 'Hustin'];
const copiedNames = ['Levi', nameOne, nameTwo];  // this copiedNames array only has THREE indexes in it
                                                 // Index 0 = 'Levi' -- Index 1 = ['Summer', 'Jerome'] -- Index 2 = ['Adam', 'Hustin']
console.log(copiedNames);

const copiedNamesSpread = ['Levi', ...nameOne, ...nameTwo];  // The "..." before the variable is the SPREAD OPERATOR
console.log(copiedNamesSpread);                              // Answer: ['Levi', 'Summer', 'Jerome', 'Adam', 'Hustin']
                                                                // In other words, it puts all of the array values into ONE single array
                                                             
const copiedNamesSpread = ['Levi', ...nameOne, ...nameTwo];
nameOne.unshift('Justin');            
console.log('Altered:', nameOne, 'Spread:', copiedNamesSpread); /* Answer: Altered: ['Justin', 'Summer', 'Jerome]
                                                                           Spread: ['Levi', 'Summer', 'Jerome', 'Adam', 'Hustin']
                                                                 Notice: The unshift of 'Justin' does NOT insert into the spread operator because we
                                                                 already used it */
console.log(nameTwo);     // Answer: ['Adam', 'Hustin']
console.log(...nameTwo);  // Answer: Adam Hustin -- This is taking each item out of the array and putting it into the console.log()

/*
    ... numbers
*/

console.log(Math.min(1, 5, -3)); // Answer: -3

const prices = [10.99, 5.99, 3.50, 2.49, 5.49];
console.log(Math.min(prices));    // Answer: NaN -- this tells us that the Math.min method wants a NUMBER, not an array

console.log(Math.min(...prices)); // Answer: 2.49 (which is the lowest number)

/*
    ... objects
*/

const persons = [
    {
        name: 'John Wick',
        enemies: true
    },
    {
        name: 'Neo (from the Matrix)',
        enemies: true
    }
];

const copiedPersons = persons;  // This is NOT copying values and setting them equal -- RATHER it is setting the location equal to each other

persons.push({name: 'Bill and/or Ted', enemies: false});
console.log('Original:', persons, 'Copy:', copiedPersons); /* Answer: Both variables (persons & copiedPersons) are changed to:
                                                                Original: [
                                                                { name: 'John Wick', enemies: true },
                                                                { name: 'Neo (from the Matrix)', enemies: true },
                                                                { name: 'Bill and/or Ted', enemies: false }
                                                            ] Copy: [
                                                                { name: 'John Wick', enemies: true },
                                                                { name: 'Neo (from the Matrix)', enemies: true },
                                                                { name: 'Bill and/or Ted', enemies: false }
                                                            ] */


/*
    primitive variables = primitive values
    Ex: let x = 10
        let y = 'abcdef'
        let z = null
    
    Variables: x, y, z
    Values: 10, 'abcdef', null

---------------------------------------------------------------

    let x = 10
    let y = 'abcdef'

    let a = x     // NOTE: a is getting the value "10" from the x variable
    let b = y
    console.log(x, y, a, b)  // Answer: 10, 'abcdef', 10, 'abcdef'

    a = 5
    b = 'xyz'
    console.log(x, y, a, b)  // Answer: 10, 'abcdef', 5, 'xyz' -- NOTE: we changed the values of a & b

---------------------------------------------------------------
    
    - 3 Data Types that are passed by reference:
        - Array
        - Function
        - Objects
            *all 3 are technically objects*
    
    - non-primitive variables are given a reference to the value they "contain" - this reference "points"
    to a location in memory

---------------------------------------------------------------

    let arr = []
    arr.push(1)

    VARIABLES     VALUES   ADDRESS   OBJECT
    arr           <#001>    #001      []
    arr           <#001>    #001      [1]

---------------------------------------------------------------

    let reference = [1]
    let refCopy = reference

    VARIABLES     VALUES   ADDRESS   OBJECT
    reference     <#001>    #001      [1]
    refCopy       <#001>

    reference.push(2)
    console.log(reference, refCopy)    Answer: [1, 2] [1, 2] -- BOTH reference & refCopy are changed
    
    reference.push(2)
    refCopy.push(3)
    console.log(reference, refCopy)    Answer: [1, 2, 3] [1, 2, 3]
                                        *BOTH are changed again because they are both referring to the SAME ADDRESS*
*/


const persons = [
    {
        name: 'John Wick',
        enemies: true
    },
    {
        name: 'Neo (from the Matrix)',
        enemies: true
    }
];

const copiedPersons = [...persons];  // NOTE: we made "persons" an array and then used the spread operator

persons.push({name: 'Bill and/or Ted', enemies: false});
console.log('Original:', persons, 'Copy:', copiedPersons); /* NEW ANSWER IS: 
                                                    Original: [
                                                        { name: 'John Wick', enemies: true },
                                                        { name: 'Neo (from the Matrix)', enemies: true },
                                                        { name: 'Bill and/or Ted', enemies: false }
                                                        ] Copy: [
                                                        { name: 'John Wick', enemies: true },
                                                        { name: 'Neo (from the Matrix)', enemies: true }
                                                        ] 
                                                    NOTE: The "persons" variable changed (b/c of .push), BUT
                                                    the copiedPersons stayed the same */
copiedPersons[0].name = 'Birdperson'
console.log('Original:', persons, 'Copy:', copiedPersons); /* ANSWER:
                                                    Original: [
                                                        { name: 'Birdperson', enemies: true },
                                                        { name: 'Neo (from the Matrix)', enemies: true },
                                                        { name: 'Bill and/or Ted', enemies: false }
                                                        ] Copy: [
                                                        { name: 'Birdperson', enemies: true },
                                                        { name: 'Neo (from the Matrix)', enemies: true }
                                                        ] */

/*
    ... & avoiding changing both the original and copied array
*/

const comics = [
    {
        title: 'Spider-Man',
        year: 1962
    },
    {
        title: 'Detective Comics',
        year: 1939
    }
];
                                              // NOTE: When we run .map, we get back an ARRAY (after we run function)
const copiedComics = comics.map(comic => ({   // ALSO NOTE: we using a CONCISE BODY ARROW FUNCTION (with a paramter of "comic") - we need to wrap the {} in ()
                                              // because if we don't it will assume we are using a BLOCK BODY ARROW FUNCTION
    title: comic.title,
    year: comic.year
}))
console.log(copiedComics);   // We get two separate objects - one with Spider-Man and one with Detective Comics

comics.push({title: 'Calvin and Hobbes', year: 1985})
copiedComics[1].title = 'Detective Comics #27';

console.log('Original:', comics, 'Copy:', copiedComics);