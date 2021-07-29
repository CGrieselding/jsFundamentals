/*
    HERE ARE A FEW DIFFERENT THINGS WE CAN DO WITH ARRAYS:
    - Populating and Referring
    - Methods
    - Length
    - Iterating
*/

// POPULATING and REFERRING 

let list = ['orange', 'banana', 'oreos'];  // In this example: orange has the index of 0, banana has the index of 1, and oreos have the index of 2
console.log(list[1]);

/*
    - When we call an array , we can append, or add, square brackets onto the end of the array name with the index number
    of the value we want to reference. This is known as SQUARE BRAKET NOTATION.

    - JavaScript starts counting at 0, so when we console.log (list[1]) we shouldsee 'banana'

    - OF NOTE: The 'key' in an array is always the index number
*/

let students = ['Evan', 'Ricky', 'Kali', 'Richard', 'Matthew', 'Cameron', 'Pheonix', 25, true, ['Matthew', 'Shake n Bake', 'Sophie'], 15 % 5];

console.log(students[10]); // Let's try to display the modulus (%) equation - the equation has an index of 10, so we would put 10 in the [] and then it will run the modulus equation
console.log(typeof students); // Answer: object - b/c an array is an OBJECT
console.log(students instanceof Array); // Answer: true
    /* In the above console.log - the 'instanceof' operator is used to check the type of an object at run time.
       Remember arrays are technically objects! */

console.log(students[4], students[7], students[9][1], 'Hello', students[9][2]);


/*
    ARRAY METHODS

    We can call on mulitple different array methods that will allow us to manipulate arrays as we need to.
*/

let food = ['Pecan Pie', 'Shrimp', 'Quesadilla', 'Cheese Cake', 'Hotdog'];

// Let's try to add to the END of our array above
food.push('Pizza');
console.log('Push:', food); // Answer: Push: Pecan Pie Shrimp Quesadilla Cheese Cake Hotdog Pizza
                            // The .push() will add a value to the end of the array

// Let's try to remove from the END of our array above
food.pop(); // this should remove the last item from the array
console.log('Pop:', food); // Answer: Pop: Pecan Pie Shrimp Quesadilla Cheese Cake Hotdog (NOTICE: Pizza is GONE!!)

// Let's try to remove from the FRONT of our array above
food.shift();
console.log('Shift:', food); // Answer: Shift: Shrimp Quesadilla Cheese Cake Hotdog (NOTICE: Pecan Pie is GONE!!)

// Let's try to add to the FRONT of our array above
food.unshift('Chicken','Garlic');
console.log('Unshift:', food); // Answer: Unshift: Chicken Garlic Shrimp Quesadilla Cheese Cake Hotdog


// Let's try to add to the INSIDE of our array above
food.splice(2, 1, 'Bananas'); // remove and insert item(s) from an array
// (position to remove, how many to remove, what to add in that location if anything)
console.log('Splice:', food); // Answer: Splice: Chicken Garlic Bananas Quesadilla Cheese Cake Hotdog

food.splice(1, 0, 'Ice Cream');
console.log('Second Splice:', food); // Answer: Second Splice: Chicken Ice Cream Garlic Bananas Quesadilla Cheese Cake Hotdog
// When 0 is in the "how many to remove" position then 'Ice Cream' will inserting in index 1


// LENGTH OF AN ARRAY

let long = [0,1,2,3,4,5,6,7,8,9,10];
console.log(long.length); // Answer: 11

let colors = ['blue', 'green', 'yellow', 'red', 'orange', 'purple'];
console.log(colors.length); // Answer: 6

/* ITERATING AN ARRAY

    forEach -
    - the forEach() method executes a provided function once for each element in an array.
    - the forEach() method does the same thing as a FOR LOOP or a FOR OF LOOP --> both iterate over the properties in an array
    - provide a callback function that has up to 3 arguments:
        1. the value
        2. the index
        3. the array object itself
*/

let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

for(let i = 0; i < colorList.length; i ++){
    console.log(colorList[i]);
}

// Remember: Directly below is how we make an arrow function
// let something = (color) => { /* code goes here */ };

colorList.forEach(
    // callback function
    color => console.log(color)
    // a callback function is a function that is either called or passed as a parameter to another function
);

// These two examples above (for & forEach) put out the exact same answer -- the second exmaple (forEach) ONLY works for arrays!

// Another Example!

let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

let logItem = item => console.log(item);
colorList.forEach(logItem);

// Another Example!

let colorList = ['magenta', 'midnight blue', 'mahogany', 'pthaleo green', 'fuscia', 'orange', 'periwinkle', 'ocre'];

colorList.forEach((item, index) => {
    console.log(item);
    console.log(index);
} )                   // Answer: you get each value (color) and with the corresponding index