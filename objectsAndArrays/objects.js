/*
    OBJECTS

    - Objects are used to store mulitple sets of data in the key/value pair format
    - Denoted by {}
*/

let netflix = {
    // name: value
    id: 1,
    name: 'The Office',
    genre: 'Comedy',
    season1: {
        seasonInfo:{
            episodeInfo: [
                {
                   episode: 1,
                   episodeName: 'Pilot'
                },
                {
                    episode: 2,
                    episodeName: 'Diversity Day'
                },
                {
                    episode: 3,
                    episodeName: 'Health Care'
                },
                {
                    episode: 4,
                    episodeName: 'The Alliance'
                },
                {
                    episode: 5,
                    episodeName: 'Basketball'
                },
                {
                    episode: 6,
                    episodeName: 'Hot Girl'
                }
            ]
        }
    }
}

console.log(netflix.name); // dot notation: when we know the name of the key/value information we want, we will use dot notation
                           // Answer: The Office

console.log(netflix);

console.log('Just season info:', netflix.season1.seasonInfo);

console.log(netflix.season1.seasonInfo.episodeInfo[0].episodeName); // Answer: Pilot



/*
    JSON OBJECTS

    - JSON stands for JavaScript Object Notation
    - JSON syntax is derived from JavaSript Object syntax, but the JSON format is TEXT ONLY
    - JSON exists as a string - useful when fetching data from a server - BUT, before we can use it, it needs
    to be translated into a native JavaScript object if we want to access the data.
*/

let spaceJam = {
    toonSquad: {
        human: 'Michael Jordan',
        rabbit1: 'Bugs Bunny',
        rabbit2: 'Lola Bunny',
        duck: 'Daffy Duck',
        tDevil: 'Tasmanian Devil',
        bird: 'Tweety',
        cat: 'Sylvester',
        pig: 'Porky Pig'
    },
    monstars: {
        0: 'Bupkus',
        1: 'Bang',
        2: 'Nawt',
        3: 'Pound',
        4: 'Blanko'
    },
    nbaPlayers: {
        phoenixSuns: 'Charles Barkley',
        newJerseyNets: 'Shawn Bradley',
        newYorkNicks: 'Patrick Ewing',
        charlotteHornets1: 'Larry Johnson',
        charlotteHornets2: 'Muggsy Bogues'
    }
}

// We can use some Object methods to help us gather information we might not otherwise know

//Object.keys()
console.log(Object.keys(spaceJam)); // Answer: toonSquad, monstars, nbaPlayers

console.log(Object.keys(spaceJam.toonSquad.duck)); // Answer: gives us the index numbers of the string "Daffy Duck" (which is 0 to 9)

console.log(Object.values(spaceJam.toonSquad)); // Answer: gives us an array with the VALUES of each key in the toonSquad object



/*
    OBJECT BRACKET NOTATION

    - Object bracket notation can allow us to find a value in an object we wouldn't be able to access using dot notation
    - We can also use object bracket notation to store a key in a variable and use that variable to access information 
    in an object
    - This works because all key names in an object are strings
*/

let garden = {
    vegetable: 'Zucchini',
    flower: 'Orchid',
    fruit: 'Kiwi',
    water: true,
    sun: true,
    size: 10
}

let test = Object.keys(garden);
console.log(test); // Answer: 'vegetable', 'flower', 'fruit', 'water', 'sun', 'size'

// Dot Notation
console.log(garden.flower); // Answer: Orchid

// Square Bracket Notation
console.log(garden['flower']); // Answer: Orchid



let baking = {};
baking['Zucchini'] = 'better make some bread!';
console.log(baking); // Answer: 'Zucchini: better make some bread!'

/* In the above example:
    - Object = baking
    - Key = 'Zucchini'
    - Value = 'better make some bread!' */

baking.bakeTime = 60; // Add this to the above example --- Answer: 'Zucchini: better make some bread!', bakeTime: 60

// Adding on to the above example...

console.log(baking[garden['vegetable']]); // Answer: better make some bread!

// Another Example!

let testObj = {
    "Space Here": true,
    noSpaces: true
}

console.log(testObj.noSpaces); // Answer: true
console.log(testObj["Space Here"]); // Answer: true -- you CANNOT use dot notation on this one because the key of "Spaces Here" has quotations
                                                    // you have to use bracket notation!