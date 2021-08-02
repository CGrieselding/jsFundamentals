const body = document.querySelector('body');  // Another way to write this is: "const body = document.body"

// need an h1
document.createElement('h1');  // creates <h1></h1>

//make the h1 say something
let header1 = document.createElement('h1');  
header1.innerText = "Our Favorite Books!"     // This step will put text in our h1 tag we created above

// put in on the page
body.appendChild(header1);          /* parent.appendChild(child);
                                       container.appendChild(item);
However, since we are "query-selecting" the body as a whole, we can also write it as document.body.appendChild('header1') */


const books = ['Lord of the Rings', 'The Richest Man in Babylon', 'The Red Tent', 'Sell Anything to Anyone', 'StormLight Archives', 'The Book of Joy', 'The Winds of Winter'];

/* Remember how to create a table (in HTML)?
    <table>
        <tr>
            <th>Book Name</th>
        </tr>
        <tr>
            <td>Book 1</td>
        </tr>
    </table>
*/

let table = document.createElement('table');    // creates <table></table>
let tHeader = document.createElement('th');     // creates <th></th>
let headerRow = document.createElement('tr');   // creates <tr></tr>

tHeader.innerText = 'Book Names';

body.appendChild(table);        // creates <body> <table> ... </table> </body>
table.appendChild(headerRow);   // creates <table> <tr> ... </tr> </table>
headerRow.appendChild(tHeader); // creates <tr> <th>Book Names</th> </tr>  -- NOTE: we are getting more specific and putting things inside of things

books.forEach(function(current){
                          // get some block of code (this is a "FOR EACH LOOP")
    console.log(current)  // this will run on each element of the array one at a time -- so when you console.log(current) you will see each value in the books array

let row2 = document.createElement('tr');
let firstBook = document.createElement('td');

firstBook.innerText = current;

table.appendChild(row2);
row2.appendChild(firstBook);
});


// Now let's try to put the above example in a "FOR LOOP"...

for(let i = 0; i < books.length; i ++){
let row2 = document.createElement('tr');
let firstBook = document.createElement('td');

firstBook.innerText = book[i];  // NOTE: Here is the difference from the above example

table.appendChild(row2);
row2.appendChild(firstBook);
}