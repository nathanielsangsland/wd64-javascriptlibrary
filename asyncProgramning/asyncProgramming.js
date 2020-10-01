//! ASYNCHRONOMOUS PROGRAMMING
/*
    -synchronus programming is code read line by line

    -Asynchronous prgramming allows a program to do more than one thing at a time.
    -Makes it possible to run long-running actions without stopping the program to wait for a response.
    
*/
//? Synchronous Sample
const secondSync = () => {
    console.log('Second Hello');
}

const firstSync = () => {
    console.log('First Hello');
    secondSync();
    console.log('End');
}

firstSync();

// "First Hello" - then "Second Hello" - then "End".  Once the one before is completed, then next will execute.

//? Asynchronous Sample 
const networkRequest = () => {
    setTimeout(() => {
        console.log('Async Code')
    }, 2000); // setTimeour has two arguments: callback (our console log), and time measured in ms (milliseconds)
};
console.log('Hello World');
networkRequest();
console.log('The End');

// Event loop: looks into the call stack and determines if it is empty or not.  If empty, it considers if there is any waiting callback that needs to be executed (our console.log('Async Code')).

//! API

/*
    API: Application Program Interface

    - is NOT a database or a server.
    - Allows us acces points to the server
        -come in the form of ENDPOINTS
        -endpoints directs us to set of data.

    ? REST API
    -Representational State Transfer
        - creates an object of requested data by the client, send values in response to user.
    - Methods:
        CRUD
            Create (POST)
            Read    (GET)
            Update (PUT)
            Delete (DELETE)
*/

//!FETCHING()
/*
    - the fetch() method is an asynchronous method. Part of the browser - NOT JS.
    - the fetch() method starts the process of "fetching" a resource.  Will return a promise and respond ONCE that promise is fulfilled.

        Promise:
            -an unknown value when created
            - represents the eventual fulfilled value or rejection (error)
        *Promises always one of these states:
            1. Pending: Initail state, neither fulfilled or rejected
            2. Fulfilled: Meaning teh operation completed succesfully
            3. Rejected: Meaning the operation failed
*/




