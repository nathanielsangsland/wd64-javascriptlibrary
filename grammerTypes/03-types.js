/*
* *************
! Types
* *************


? Data and Structure Types
* *************
    -primitive Data Types
        -boolean
        -undefined
        -numnber
        -string
            -bigInt
            -symbol*
    - null
    - function
*/

// ? BOOLEANS
//* A Booleans has two possible values: true and false

let on = true;
let off = flase;

console.log(on);

// ? NULL
// A null vause is an empty value. THikn of it as a empty container that has space to fill.

let empty = null;
console.log(empty);

let undef = undefined;
console.log(undef);

let password;
console.log(password);

/*
    -Null is like a container with nothing it it.
        -Null you can trust as zero - Undefined not so much.
    -undefined is when a variable has never been set, or hasn't been created yet.
*/

//? NUMBERS

let degrees = 90;
console.log(degrees);

let precise = 999999999999999  //15 9's
console.log(precise);

let rounded = 9999999999999999 //16 9's
console.log(rounded);
// JS gives us space for 15 9s before rounding up.

let notQuite = 0.2 + 0.1;
console.log(notQuite);
// JS rounds out at a certain number, so if math is needed be aware.

let whatIf = (0.2 * 10 + 0.1 * 10);
console.log(whatIf);
let numbersAreHard = (0.2 * 10 + 0.1) / 10;
console.log(numbersAreHard);
console.log('.' + whatIf);

//? STRINGS'

// Strings represent text ans are wrapped in either single or double quoutes.

let doubleQuote = "Double Quote";
let singleQuote = 'Single Qoute';
let bothQuotes = 'I said, "whatabout Bob?"';
console.log(doubleQuote, singleQoute);

let inception = "i've";
let singleQ = 'I\'ve';
console.log(inception, singleQ)

//? Numbers vs Strings
let addThese = 1050 + 100;
console.log(addThese);

let addTheseAlso = '1050 + 100';
console.log(addTheseAlso);

console.log(typeof addThese);
console.log(typeof addTheseAlso);

// We can use an operator called 'typeof' that returns a string that tells us exactly wht our varibles "type" is.

let stringToNumber = Number('1150');
console.log(stringToNumber);
console.log(typeof stringToNumber);

// const log = console.log; // We can reduce our typing by setting console log to a variable that dosen't change.
// log('test');


//? OBJECTS

/*
    - Objects are used to store many values instead of a singular value.
    -Consider these as a collection of various properties.
    -denoted by curly brackets: {}
*/

let frodo = {
    race: 'hobbit',  //string
//  (1)   (2)
    rings: 1, //number
  
    sting: true, // boolean
}

console.log(frodo);
console.log(typeof frodo);

//1: Key
//2: Value

let obj = {
    key: 'value'
};

console.log(obj);

//? ARRAYS
/*
    - Containers that hold a list of items
    - denoted by square brackets: []
    -all items are within the square brackets.
    -regardless of datatype, each item is seperated by a comma.

*/

let arrayList = ['pos 1', 'pos 2', 'pos 3'];
console.log(arrayList);
let anotherExample = [1, 2, 'three', true];
console.log(anotherExample);

console.log(typeof anotherExample);

let frodo = {
    race: 'hobbit',  //string
//  (1)   (2)
    rings: 1, //number
  
    sting: true, // boolean
}

let frodo = {
    race: 'hobbit',  //string
//  (1)   (2)
    rings: 1, //number
  
    sting: true, // boolean
}

let objArr = [{
    race: 'hobbit', //string
//(1)     //(2)
    rings:1, // number
    sting: true,  //boolean     
}];

console.log(objArr);

//? ADDITION vs CONCATENATION
/* 
    - JS see the "+" symbol in two different ways.
        -When combined with numbers, uses built-in math functionality.
        -When comnined with strings, it ignores the math and concats the two strings.
*/

let strings = 'one' + ' ' + 'is a number';
;let concatDiff = 1050 + '100';
console.log(strings);
console.log(concatDiff);
console.log(typeof concatDiff);

/*Challenge*/

let firstName = 'Nate';
let lastName = 'Sangsland';
let houseNumber = 216;
let street = 'central ' + 8 + 'th ' + 'street ';
let city = 'Santa Rosa Beach';
let state = 'FL';
let zipCode = 32459

console.log(firstName, lastName,',', houseNumber,',', street, ',', city,',', state,',', zipCode,);

//? String: Properties

/*
    -strings have properties, or the qualities assocaited with that string.
    - the length of a string is a property.
*/

let myName ="Nate";
console.log(myName.length);

//? String: Methods

/*
    -methods are tools that can help us manipulate our data
*/

let myNameIs = "Nate";
console.log(myNameIs.toUpperCase());  // this is method that changes string to uppercase
console.log(myNameIs.toLowerCase());  // this is method that changes string to lowercase

let home = 'my home is fishers';
console.log(home.includes('fishers'));

