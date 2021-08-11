/*
    CLASSES (in JavaScript)

    - Classes can be defined by either expression or declaration
    - Classes are functions

    - Classes act as blueprints for creating objects that share methods and properties. Using this blueprint
    creates different "instances" of that class, and object will have different values for the same properties
    they hold.

    - We write a class just like a function:
        - body of the class will be written between { }
    
    - Constructor method is a special METHOD for creating and initializing an OBJECT that was created with
    a class.
        - NOTE: we can use the "super" keyword to call a separate classes constructor
        - The "super" keyword is used to access and call functions from a parent class

    - Classes were introduced in ES5 (we are currently on ES6)

    - Classes are a new way to write a previous existing prototype-based inheritance

    - Classes are the closest thing in vanilla JavaScript to OOP (Object Oriented Programming)
*/


/*
    CLASS DECLARATION
*/

class Automobile {                        // NOTE: Typically classes are named starting with a capital letter. This helps distinguish them from variables.
    // start writing my class here
    constructor(make, model){
        // set the current instance of Automobile's "make" property to the parameter value of make
        this.make = make         // NOTE: .this is a keyword
        this.model = model
    }
}

    /* NOTE ON HOISTING: Unlike function declarations, class declarations are NOT hoisted. A class declaration
    must be declared before accessing it. */


/*
    CLASS EXPRESSION

    - Classes can be named OR not named
    - The name given to an unnamed class expression is local to the class' body
        - The name of a named class can be retrieved through the class' name property
*/

// Here is an UNNAMED example:
let Vehicle = class {
    constructor(make, model){
        this.make = make
        this.model = model
    }
}

console.log(Vehicle.name);   // Answer: Vehicle

// Here is a NAMED example:
let Auto = class Mobile{
    constructor(make, model){
        this.make = make
        this.model = model
    }
}

console.log(Auto.name);  // Answer: Mobile


/*
    METHODS
*/

// OLD SYNTAX: Method Definition
const automobile = {
    start: function() {
        // do stuff here
    },
    stop: function() {
        // do more stuff here
    }
}

// NEW SYNTAX: Prototype Method
const automobile = {
    start() {
        // do stuff here
    },
    stop() {
        // do more stuff here
    }
}


// Lets practice this NEW syntax...
class AutoMobile {
    constructor(make, model){
        this.make = make
        this.model = model
    }

    // Method 1
    start(){
        console.log(`This ${this.make} ${this.model}'s engine started.`);   // NOTE: We need the "this." in the ${ }
    }

    // Method 2
    stop(){
        console.log(`This ${this.make} ${this.model}'s engine stopped.`);
    }
}

/*
    NEW INSTANCES

    - Using the "new" KEYWORD, we can create a new object/instance of a class
*/

let hondaCivic = new AutoMobile('Honda', 'Civic');    // How would we get "Honda" in the console?? (see below)
console.log(hondaCivic.make);   // Answer: Honda
console.log(hondaCivic);        // Answer: AutoMobile { make: 'Honda', model: 'Civic' }
hondaCivic.start();             // Answer: This Honda Civic's engine started.


let fordEscape = new AutoMobile('Ford', 'Escape')
fordEscape.start()   // Answer: This Ford Escape's engine started.
hondaCivic.stop()    // Answer: The Honda Civic's engine stopped.
                     // Even after making a NEW instance these both are still referring to the same class that has a (make, model)



/*
    CONSTRUCTOR METHOD

    - This helps create and initialize an object created from a class
    - It works along with the "new" keyword

    - Needs to be included to create new objects and instances of our class
        - sets properties
        - passes values for properties
*/

class Cookie {
    // the parameters will be the placeholders for values we want to be passed and stored in object
    constructor(type, icing, shape){
        this.t = type
        this.i = icing
        this.s = shape
        // the names do NOT have to match
            // LEFT SIDE: declaring keys for the values we will pass on. The left side stores values
            //    for "this" specific object being created
            // RIGHT SIDE: assigning our passed values into the keys
    }
}

let chocolateChipCookie = new Cookie('chocolate chip', false, 'square');
// How do I console.log the type of my cookie?
console.log(chocolateChipCookie.t)  // Answer: chocolate chip

console.log(chocolateChipCookie.type)  // Answer: undefined


/*
    EXTENDS

    - Extends is a keyword used in clas declaration/expressions to create a new child class

    - CHILD CLASS:
        - Each new class created inherits the properties and methods from the parent class
            - These new classes can also have it's own methods and properties
            - Also known as a subclass
*/

// PARENT CLASS
class Animal {
    constructor(name){
        this.name = name
    }

    eat(){
        console.log(`{this.name} eats their food.`)
    }
}

// SUBCLASS (CHILD)
class Dog extends Animal {
    constructor(name, breed) {
        /* - "super" has to be used BEFORE we can use "this." - otherwise we get an error
           - Inside the parenthesis, we will pass in all properties that the parent class needs before assigning
            properties to the child class. */
        super(name)
        this.type = breed
    }

    play() {
        console.log(`The ${this.type} named ${this.name} fetches the ball!`)
    }
}

// creating a new instance of dog
let mastiff = new Dog('Maximus', 'Mastiff')
mastiff.play()  // Answer: The Mastiff named Maximus fetches the ball!
mastiff.eat()   // Answer: Maximus eats their food.



// ANOTHER EXAMPLE:
class Cupcake {
    constructor(icing, batter, cost){
    this.i = icing
    this.b = batter
    this.c = cost
    }

    getPrice(amount){
        console.log(this.c * amount)
    }
}

let dessert = new Cupcake('vanilla', 'chocolate', 5)
dessert.getPrice(3)