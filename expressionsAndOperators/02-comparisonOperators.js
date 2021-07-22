//  COMPARISON OPERATORS

// EQUAL
'3' == 3;
console.log('3' == 3); // Answer: true
/*
    JavaScript is helpful and does something known as coercion when comparing values.
        - Coercion is the process of converting a value from one type to antoher.
        - In the above example, JavaScript assumed that we were trying to check if '3'
        is equal to the number 3. Even though one of our values is a string and one is an integer.
        - **OF NOTE** == (two equal signs) is comparing the two values and the type does NOT matter. === (three equal signs) is
        comparing the two values and the type DOES matter.
*/

// STRICT EQUAL (this overrides JavaScript coercion)
console.log(3===3); // Answer: true
console.log('3'===3); // Answer: false

// NOT EQUAL
console.log('3' != 3); // Answer: false (becasue they are actually equal)

// STRICT NOT EQUAL
'3' !== 4;
console.log('3' !== 4); // Answer: true

// GREATER THAN
3 > 2;

// LESS THAN
2 < 3;

// GREATER THAN OR EQUAL TO
3 >= 2; // make sure not to confuse this with a "fat arrow function" =>

// LESS THAN OR EQUAL TO
2 <= 3;

// AND
2 && 3;

// OR
2 || 3;