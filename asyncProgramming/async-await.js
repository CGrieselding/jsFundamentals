/*
    ASYNC/AWAIT

    - This allows us to prorgam in a synchronous manner while still allowing code to run
    in the background.
    - Helps keep our sites responsive
*/


/*
    Async Function (syntax)
        - Allows us to make a normal function asynchronous: which means we can use await
        - Must use the async keyword at the beginning of the function declaration
*/

// Here is an exmaple of the syntax...
async function myFn(){
    await console.log('testing');
}

myFn();  // Answer: testing

const myAsyncFn = async () => {
    await console.log('testing');
}

myAsyncFn();  // Answer: testing

const newFn = () => {
    await console.log('testing');
}

newFn(); // Answer: error - this is becayse "await" is ONLY valid in an async function


// Another Example!
async function fn(){
    return 'hello';
}

fn().then(console.log); // This will give us a promise of 'hello' returned --> then console.log the value


/*
    AWAIT
    
    - Pauses an async function until a promise is settled (either resolved or rejected)
*/

// USING FETCH AND .THEN CHAINING
fetch('https://random.dog/woof.json')
    .then(result => result.json())       // This line takes in result and translates it into json
    .then(json => console.log(json))     // This line will print that json in the console
    .catch(error => console.log(error))  // This line will print any errors that might happen

// USING ASYNC
async function getWoof(){
    // First Stop: waiting for the fetch to get a response (see below)
    const response = await fetch('https://random.dog/woof.json')
    // Second Stop: waiting for the response to get translated
    const json = await response.json();

    return json;
}

console.log(getWoof());  /* Answer: undefined - the function runs but does not return a value until the
                        console.log() has already printed something */

getWoof().then(console.log)  /* Answer: { object } - the console.log will not run until the promise from
                            getWoof has resolved, meaning it will have a value (or error) */