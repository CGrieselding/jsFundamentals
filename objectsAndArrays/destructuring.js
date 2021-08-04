/*
    ARRAY DESTRUCTURING

    - Array destructuring allows use to "unpack" values from arrays or properties from objects
    - It has similar syntax to array literals, BUT is on the left side of the assignment operator (=)
        - This will define what values to unpack
    - Very useful for pulling information out of an array/object and assigning that data to it's
    own variable
*/

const boardGames = ['Catan', 'Monopoly', 'Clue']

// array destructing sytax
const [gameOne, gameTwo, gameThree] = boardGames;
console.log(gameOne); // Answer: Catan
console.log(gameTwo); // Answer: Monopoly

// What if this happened?
const [gameOne, gameTwo] = boardGames; /* There is no more third value (gameThree)
                                          NOTE: If I don't define gameThree, it will just ignore it (aka Clue), so if
                                          we console.log gameOne & gameTwo, it will only display Catan & Monopoly */
// What if this happened?
const [ , gameOne, gameTwo] = boardGames; /* Answer: 'Monopoly' 'Clue' -- This is because there is a comma at beginning of
                                            array and it serves as an index */
            
/*
    REST OPERATOR

    - Using the rest operator will look almost exactly like using the spread operator
        - Spread expands into it's elements
        - Rest collects multiple elements and condenses them into one element
        - Rest MUST MUST MUST be the last element defined using array destructing
*/

const hitchHikersGuide = ['Arthur Dent', 'Trillian', 'Babel Fish', {day: 'Thursday', answer: 42}];

let [characterOne, characterTwo, ...otherInfo] = hitchHikersGuide; // Rest operator is also denoted by ...
console.log(characterOne)
console.log(characterTwo)
console.log(otherInfo)
/* Answer:
Arthur Dent
Trillian
[ 'Babel Fish', { day: 'Thursday', answer: 42 } ]
*/

const harryPotter = ['Snape', 'Moaning Myrtle', 'Harry', 'Ron Weasley', 'Hermione', 'Dumbledore'];

let [firstName, secondName, thirdName] = harryPotter
console.log(firstName, secondName, thirdName); // Answer: Snape Moaning Myrtle Harry

let [first, second, ...mainCharacters] = harryPotter
console.log(first, second, mainCharacters); // Answer: Snape Moaning Myrtle ['Harry', 'Ron Weasley', 'Hermione', 'Dumbledore']

let [ , , ...mainCharacters] = harryPotter
console.log(mainCharacters)   // Answer: ['Harry', 'Ron Weasley', 'Hermione', 'Dumbledore']



/*
    OBJECT DESTRUCTURING
*/

const game = {
    title: 'Legend of Zelda: Breath of the Wild',
    developer: 'Nintendo',
    platforms: ['Nintendo Switch', 'Wii U']
}

const {title, developer, platforms} = game;   // OF NOTE: When using object destructing, the keys in the { } need to match up with the keys in the "game" variable
console.log(title);  // Answer: Legend of Zelda: Breath of the Wild
console.log(developer); // Answer: Nintendo
console.log(platforms); // Answer: ['Nintendo Switch', 'Wii U']


const games = [
    {
        title: 'Legend of Zelda: Breath of the Wild',
        developer: 'Nintendo',
        platforms: ['Nintendo Switch', 'Wii U']
    },
    {
        title: 'Bloodborne',
        developer: 'From Software',
        platforms: ['PS4']
    },
    {
        title: 'Stardew Valley',
        developer: 'ConcernedApe',
        platforms: ['PC', 'macOS', 'Linux', 'PS4', 'Xbox One', 'Nintendo Switch', 'PSVita', 'iOS', 'Android']
    }
]

const [gameOne, gameTwo, gameThree] = games; // Example of array destructing

const [{title, developer}, gameTwo, gameThree] = games;
console.log(title, developer);
console.log(gameTwo);
console.log(gameThree);   /* Answer of these 3 console.logs:
                            Legend of Zelda: Breath of the Wild   Nintendo
                            **Object 2 (all stuff in Bloodborne)
                            **Object 3 (all stuff in Stardew Valley) */

// What about destructing gameThree??

      // key   var name
const [{title: gameOne, developer: devOne}, gameTwo, {title: gameThree}] = games;  // NOTE: We use : to give the specific keys a variable name
console.log(gameOne, devOne);  // Answer: Legend of Zelda: Breath of the Wild   Nintendo
console.log(gameThree);        // Answer: Stardew Valley


// What about destructing IN A FOR LOOP (using above example)?

for({title, developer} of games){
    console.log(`${title} is developed by ${deeloper}`)
}
        /* Answer: Legend of Zelda: Breath of the Wild is developed by Nintendo
                   Bloodborne is developed by From Software
                   Stardew Valley is developed by ConcernedApe */