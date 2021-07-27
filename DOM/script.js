console.log('Hello from the script file!'); /* Since we linked the script.js file in the index.html file (using scr = in the script tag),
                                            we will see this string in the console when we inspect the page. */


// ! 1 - getElement by id

console.log(document); // This puts the entire HTML document in the console
console.log(document.body); // This puts the <body> in the console
console.log(document.getElementById('testParagraph'));
console.dir(document.getElementById('testParagraph')); // Using console.dir() to see the properties of the object instead of the html tag

document.getElementById('testParagraph').style.color = "red" // This changes the <p> id that is 'testParagraph' to red text color

let testPara = document.getElementById('testParagraph'); // You can set this dot notation equal to a variable (testPara in this case)
                                                         // Now we only need to type out the variable name and won't have to type out the long dot notation every time
testPara.style.color = 'blue' // This changes 'testParagraph' id to blue text color
testPara.style.backgroundColor = '#666'

/* This method will reach out to the HTML page and grab the first HTML element with the specific id passed into the
method (in the above examples, testParagraph). This is important to know because if you have 2 elements in the same id,
you will ONLY get the first, though you usually will not have 2 elements with the same id. */


// ! 2 - querySelectorAll & innerText/innerHTML

console.log(document.querySelectorAll('.sampleClass')); // This gives us an array of all items with the class 'sampleClass' in a "NodeList"

console.log(document.querySelectorAll('p.sampleClass')); // This give us an array with ONLY p tags of the class 'sameplClass'

        // NOTE: ALL elements are considered a node (ex. p, h2, etc.)

document.querySelectorAll('p.sampleClass')[0].innerText = "My text has changed!"; // This changed the first index (aka [0]) of the array to "My text has changed!"
// We use square braket notation to select an index from the array, even if there's only one element. innerText just references or changes the text inside of that element

let changeAll = document.querySelectorAll('p.sampleClass');

changeAll.forEach(pTag =>{
    pTag.innerText = 'My text has been changed using a forEach() method!';
    pTag.textContent = 'My text has been changed using a forEach() method!';
    pTag.innerHTML = 'My text has been changed using a forEach() method!';
})

/*
    INNERTEXT vs INNERHTML vs TEXTCONTENT

    - innerText will simply reference or allow us to change the text of a specified element.
    Will return visible text in a "node".

    - textContent does the same thing that innerText does, but will return the FULL text of a "node".

    -innerHTML allows us to set text as well as HTML elements, which will be nested inside of the current HTML
    element we are referencing.
*/
                                                               // In the console these display:
console.log(document.getElementById('spanTest').innerText);    // Hello
console.log(document.getElementById('spanTest').textContent);  // HelloWorld
console.log(document.getElementById('spanTest').innerHTML);    // Hello<span style="display: none">World</span>


// ! 3 - addEventListener() 

document.getElementById('clickThis').addEventListener('click',
    function(event){
        console.log(event.target);
        event.target.style.backgroundColor = '#031BFE'
    })


// ! 4 - addEventListener - keyup

let input = document.getElementById('nameInput');

input.addEventListener('keyup', e => {
    console.log(e.target.value);
    // console.log(document.getElementsByTagName('p'));
    document.getElementsByTagName('p')[0].innerText = 'Something has changed!';

    if(e.target.value == ''){
        document.getElementsByTagName('p')[1].innerText = 'Nothing has been typed...';
      } else {
          document.getElementsByTagName('p')[1].innerText = `Everyone, say hello to ${e.target.value}`;
      }
})