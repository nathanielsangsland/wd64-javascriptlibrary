/*
* **************
! VARIBLES  
* ************** 
*/ 

console.log('hello');
//THe console log is a debugging tool

//varible is a storage container

let a = 2;

/*
-let : is our KEYWORD
-a : Is our NAME of our variable
- = : is our ASSIGNMENT OPERATOR
-2 : is our Varible VALUE
*/

let b = 1;

console.log(a + b);

//! RESTRICTIONS

/*
    -a variable name must begian with a letter, underscore, or a dollar sign.
    - numbers may follow the above characters, BUT cannot come first.
    -javascript IS cas sensitive - 'hello' and 'Hello', thes would be different varibles.
    -no spaces are allowed in varible names.
    -camelCase is beth ebst practice for naming

    -ex:
        let myName = 'eric;
        is easier to read than;
        let myname - 'eric':
*/

let startingWithLetter = "works";
let _startWithUnderscore = "works";
let $startWithDollarSign = "works";
// let 4starsWithNumber = "Breaks"

console.log(startingWithLetter,_startWithUnderscore, $startWithDollarSign);

let PascalCase;
let camelCase;
let snake_case;

/*
*KEYWORDS

var, let, and const

    -var: 'old' keyword for varible, ** we won't be using it as often but is still a viable  one to use,

    - let "new" keyword for varible, (introduced with ES6 "newest version of ECMAScript which is a standarizaiton of JS")

    - const: also "new" keyword that declares an UNCHANGABLE, or constant, varible.

*/

var variable = 'var varible'
let letvariable = 'let variable'

// let function = 1;  Cannot use reserved words within a varible name - *function is a reserved word.


/*

* *************
! DECLARATIONS & INITIALIZATIONS

* *************
*/

// Declarations are the LEFT SIDE of the assignment operator
let x = 10

// 10 is our initialization

let y;
console.log('declaration:', y);

y = 10;
console.log('initialization: ', y);

y = 33;
console.log('initialization 2: ', y);

// We've set our variable with our let keyword, With each iteration, we have redeclared what it is.

//? const

let today = 'Great!';
const efa = 'Wonderful!';
console.log(today, efa)

today = 'Awesome!';
console.log(today, efa);

//efa = 'Super';
console.log(today, efa);
// const allows us to make a variable that we don't want to change.