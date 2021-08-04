/* PIG LATIN CHALLENGE (pair coding) - morning
************
    - Create a function that takes in strings
    - In the function, translate a phrase into pig latin and print it to the console.

    - If able to do so, return the value into another variable and print that variable

    What is Pig Latin?
        * If the word begins with a consonant, remove the consonant to the first vowel, place it at the end of the word, and add an 'ay' to the end (i.e. Pig Latin => IgPay Atinlay)
        * If the word begins with a vowel, simply add an 'ay' at the end of the word
    
    - It is greatly encouraged to seek out possible solutions utilizing MDN (or anything else that may be helpful).
*/

/* Looking at this example, what do we need?
    1. function
    2. variables in function
    3. for loop(?)
    4. if else
    5. console.log
    6. call function
*/

function pigLatin(myString) {

    // check if the first letter is a vowel or consonant
    // first letter is consonant
        // then move it to the back and put an "ay" after
    // first letter is a vowel
        // just an an "ay" at the end

    let vowels = ['a', 'e', 'i', 'o', 'u'];

    // if I get a sentence, how do I know when a word ends or begins
    // Ex: "the quick brown fox jumps over the lazy dog"

    const wordArray = myString.split(' ');  // This separates every word for whatever I put in the string "myString"

    let newWordArray = [];

    for (let word of wordArray){
        if(word[0] == 'a' || word[0] == 'e' || word[0] == 'i' || word[0] == 'o' || word[0] == 'u'){
            word += 'ay'   // Here we are ADDING an 'ay' to the end it is starts (index = [0]) with a vowel
            newWordArray.push(word)
        } else {
            let letters = word.split('');  // Here we are splitting each words into individual letters
            let shift = letters.shift();  // Here we are creating a variable called "shift" and setting it equal to removing the first letter of each word
            letters.push(shift, 'ay');
            word = letters.join('');     // Here we are overriding what word USED TO be equal to and setting it equal to letters.join('')
                                        // Notice: There is no space between the '' becasue we DO NOT want space between the letters
            newWordArray.push(word);
        }
    }
    console.log(newWordArray.join(' '));
}

pigLatin('The quick brown fox jumps over the lazy dog')