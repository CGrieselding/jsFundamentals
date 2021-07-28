/*
    ASYNCHRONOUS PROGRAMMING

    - Generally, JavaScript is read from top to bottom, performing each line of code one after another - this is 
    known as SYNCHRONOUS programming.
        - Ex. line 1 is run and completed before line 2 begins, which is then run and completed before line 3, etc.
    
    - This can become an issue when we fetch, or gather, information from an outside source, from something such
    as an API. If JavaScript did not have the ability to run code asynchronously, we would be forced to wait
    for our line of code to finish as it tried to gather mountains of data from a database.
        - ASYNCHRONOUS CODE will allow us to somewhat ignore the one line at a time rule.

    - Asynchronous programming allows a program to do more than one thing at a time.

    - Asynchronous programming makes it possible to run long-running actions without stopping the program to wait for a response.
*/


// Synchronous Code
const secondSync = () => {
    console.log('Second Hello');
}

const firstSync = () => {
    console.log('First Hello');
    secondSync();
    console.log('End');
}

firstSync(); // Answer: First Hello, Second Hello, End
             // We are calling the firstSync function, so it reads that from top to bottom of that function
            

// Asynchronous Code

/* - setTimeout is a method that will work in the browser and node in JavaScript. We are using it to stimulate a network request.
- setTimeout has 2 parameters: the first is a callback function (a function we pass through a parameter) and the second is how 
much time to wait measured in milliseconds.*/
                            

const networkRequest = () => {
    setTimeout(() => {
        console.log('Async Code');
    }, 2000)                                 
}

console.log('Hello World');

networkRequest();

console.log('The End');



/*
    API - "Application Program Interface"

    - An API is something that will allow us to communicate/talk to with other programs, such as a database
    or a server. However, an API itself is NOT a database or server - it is the code with access points to 
    the server.

    - Access to a server will come in the form of ENDPOINTS.
        - Endpoints direct us to sets of data.
    
    
    REST API - "REpresentational State Transfer"

    - A Rest API creates an object of requested data from the client, and sends values back as a response.

    When using a REST API, there are four methods:
        - CRUD
            - Create ("POST" request to API)
            - Read ("GET" request to API)
            - Update ("PUT" request to API)
            - Delete ("DELETE" request to API)
        

    FETCH()

    - The fetch method is an asynchronous method, and is part of the browser window (NOT JavaScript). This method
    will start the process of 'fetching', or grabbing, a resource from the network, and will return a promise
    which is fulfilled when the response is available.

    - Promise (as mentioned above) is an unknown value that will eventually be filled with either a value or
    a rejection (error).
        - A promise is in one of these three states:
            1. Pending: initial state, neither fulfilled or rejected
            2. Fulfilled: meaning the operation completed successfully
            3. Rejection: meaning the operation failed
*/