/*
    SCOPE

    What is scope?
        - Scope is how a computer keeps track of all of it's variables in a program.
        - Scope can be nested, where there is an outer scope that encloses an inner scope.

    Different kinds of scopes:
        - Global: variables that are defined outside of a function.  Functions can have acess to variables that are within the global scope.
        Consider global scope just like we would consider Earth in relation to Indiana.  There are a lot of "things" that could be happening outside of our local environment that could affect our state and a lot of "things" that wouldn't.
            In relation to JS, we could have multiple functions within one JS file.
        
        - Local:  Variables that are defined within a function. Within Indiana, there are aspects that we can focus on that our Global aspect doesn't consider unless we make it available.  
        
        - As long as your application exists, your Global Scope exists. Local Scope only exist when your functions are called and executed.
*/

let scope = 'Earth';

let getFromGlobal = 'the moon!';

if(true){
    let scope = 'Indiana'
    // console.log(scope);    Answer: Indiana - this is because we redefined scope (to Indiana) in this "if" statement
    console.log(scope, 'marks the local scope.')

    let kindaLocal = 'Noblesville';

    if(true){
        let scope = 'Indianapolis'; // local scope inside of a local scope ("city" level)
        console.log(scope, 'is the capital of Indiana.'); // Answer: Indianapolis is the capital of Indiana
    }
    console.log(scope, 'should be the closest to Indianapolis.') // Answer: Indiana should be the closest to Indianapolis - pay special attention to what is inside the {} - we are outside the {} directly above, so it goes up to the next scope = 
}

/*
    LET vs VAR

    Var and Let seem to operate the same way, but while they do have a lot of the same functionality (both lets us declare
        and initialize variables), they behave differently.
            - var is scoped to the nearest functions block
            - let is scoped to the nearest enclosing block
*/