/*
* ***************
! ARROW FUNCTIONS
* ***************

Arrow Funcitons are expressional functions taht can be simplified into one of two forms, CONCISE and BLOCK BODY.  The main goal is to gernerate shorter syntax for writing a function.

* Arrow Functions also do NOT get hoisted



*/ 

function regFunc(){
    console.log('Regular';)
}

regFunc();

//    (1)       (2)(3)     (4)
let arrowFunc = () => console.log('Arrow Func');
arrowFunc();  // still need to invoke our function

/*
    1. Arrow functions are ALWAYS anonymous.
    2. Parameters are still capable of being injected.
        -if we only have one parameter, we technically don't need the parans()
        -BUT if we are not passing any parameters, it is REQUIRED to denote ()
    3. This syntax tells JS that we are about to process a function.
    4. Within this format, JS assumes the return statement.
*/

//? CONCISE vs BLOCK BODY

//* Concise:

let cBody = (x,y) => console.log(x + y);
cBody(1,2);

let slightlyComplex = (x,y) => x > 2 && y < 2 / console.log(`${x} is greater than 2 ${y} is less than 2`) : console.log (`${x} and ${y} are where we want them`);

slightlyComplex(3,1);
slightlyComplex(1,5);

//* Block
// THe 'return' keyword IS required. We also include the curly braces.

let blockArrow =(x,y) => {
    console.log(x);
}

console.log(blockArrow("we, "Block Body)){
    console.log(x);
}

sampleBlock(99);