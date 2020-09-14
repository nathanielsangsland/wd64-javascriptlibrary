/*
* *****************
! FUNCTIONS
* *****************

Funcions are a process that we call upon to run an action.
    -Take an input so that it process it, modify it or just respond to it.
    - Returns a value (but not always)
    -Can be invoked (called upon) as often as we need.

*/

// (1)  (2) 
function hi(){
    console.log('hi');

}

//1: Keyword
//2: Name of the function and the parenthesis for the parameter.

// (1)      (2)     (3)
function functionName() {
 //       (4)
    return value
};
// (5)
functionName()

/*
    -1: KEYWORD "function"
    -2: NAME of "functionName"
    -3: PARAMETER "currently empty"
    -4: STATEMENT    "To process"
    -5: INVOKE "on switch"
*/ 

//? Function Declaration
// A chunk of code that perfroms a set a set action when it is invoked
function funcOne(){
    console.log('Statement Here');

}
funcOne();

//? Function Expression
// Assigning a function to a varible is what is called an EXPRESSION
let first = function funcTwo() {
    console.log('Second Statment');
};

//console.log(first);

first();
// console.log(first);

//?

//? Anonymous Function
// Anonymous Functions are stored in memory but the runtime doesn't automatically create a reference to it.

let anon = function() {
    console.log('anon function')
}
anon();