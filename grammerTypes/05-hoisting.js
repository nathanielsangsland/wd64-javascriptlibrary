/*
* ****************
! HOISTING

* *******************

    What is hoisting?
        -Js pulls all variables and  functions calls to the 'top" of their respectice scope prior to being executed.
        -Only the declaration is pulled up, NOT the assignment.
*/

//console.log(hositedVar);


//console.log('How JS see hoistedVar: ', typeof hositedVar);
//let hoistedVar = 'using let';
 //var hoistedVar ='using let';

 //console.log(noVariable);

//? Hoisting in a function
// This process is considered the same within a function,  On the first pass, it read it, pushes the declarations to the top and then executes them in th order that they are written.

function testHoist() {
    becomesGlobal = "not declared, it becomes part of the global scope";
    console.log('Prior to declaring ', insideFunc);
    var insideFunc = "Rules still apply here";
    console.log(insideFunc);
}

testHoist();
console.log(becomesGlobal);

// IT is best practice to ALWAYS declare variables regardless of whether the are in a function or gloabl scope. This makes it clear how it should be handled.

//? Using LET
// The keyword 'let' is block scoped and not function scoped.

console.log(letVariable);
let letVariable = 'Using Let';
// This throws a ReferenceError due to ES6 not accecpting undeclared variables.  This is to ensure we ALWAYS declare our variables FIRST.

//? Hoisting Function
// Function Declarations:

hoistedFunc();

function hoistedFunc(){
    console.log('This is a hoisted function')
}

// Function Expressions:
// These are NOT hoisted.

expressionFunc();

let expressionFunc = function () {
    console.log('works?');
}
