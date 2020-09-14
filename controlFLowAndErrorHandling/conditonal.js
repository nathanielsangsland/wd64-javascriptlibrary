/*
* ****************
! CONDITIONALS
* ***************

? FALSEY VALUES:
    -False
    - 0
    -"", '', ``
    - undefined
    - Nan (not a number)

    When JS is expecting a boolean value it is returned with one of these 6 values, it is evaluated as "falsy"


    */

    /*
    * **************
    ! If

    * **************

    */

    let light ='on';
    if(light == 'on'){
        console.log('the light is on');
    };

    let weather = 65;

    if (weather <= 70){
        console.log('Wear a jacket');
    };

    let rain = true
    
    if (weather < 70 && rain !=false){
        console.log('It is a little chilly ans will possibly rain.');
        // new function
    };


    /*
    * ***************

    IF ElSE

    * ***************
        If Else allow us the ability of write our a chain of events.
    */

    let today = 75;
    
    if(today < 70) {
        console.log('It is' + today + ', wear a jacket');
    } 
    else{
        console.log('It is ' + today + ', No jacket needed.')
    }


    /*
    Bronze:
    Write an if else statement that checks your name;
    If it is your name, console log 'hello my is <name>'
    If the name does not match, console.log 'Hello, what is your name?'

*/

let name = 'nate';

if(name == 'nate'){
    console.log('hello my name is nate');
} else{
    console.log('what is your name? ')
};

let name = 'Eric';

if(name == 'Tina') {
    console.log('Hello, my name is ' + name + '.');
} else {
    console.log('Hello, is your name ' + name + '?');
}

/*
* *************
! ELSE IF

* *************
this is a condition that would be checked if the above conditon was not met.
*/

let cookTime = 40;

if(cookTime ===45){
    console.log('let us feast!')
} else if(cookTime >= 30){
    console.log(`it has only been ${cookTime} minutes. Wait another 5 -15 minutes.`)

} else if(cookTime >= 20){
    console.log(`it has only been ${cookTime} minutes. Wait another 10 -25 minutes.`)

} else {
    console.log(`It has only been ${cookTime} minutes. Perhaps at least try cokking it...`)
}

// The end of the ELSE IF statment should have a simple "else" to finish it.

//! CHALLENGE
/*
    Set a variable of age and give it a number of your choice
    Create an else if statement that checks the following:
    If the age is 17 or younger, console.log 'Sorry, you're too young to do anything.'
    If the age is at least 18, console.log 'You can vote!'
    If the age is at least 21, console.log 'You can drink!'
    If the age is at least 25, console.log 'You can rent a car!'
*/

let age = 17;

if(age <= 17){
    console.log(`your age is ${age} Sorry, you are too young to do anything`);

} else if(age >= 18){
    console.log(`your age is ${age} You can vote!`);

} else if(age >= 21){
    console.log(`your age is ${age} you can drink!`);

} else(age >= 25){
    console.log(`your age is ${age} you can rent a car!`);
}


let age = 16

if(age >=25){
    console.log(`${age } is old enough to rent a car`);
} else if(age >= 21){
    console.log(`${age} is old enough to drink.`);
} else if(age >= 18) {
    console.log(`${age} is old enough to vote`);
} else {
    console.log(`${age} is too young to do anything....`)
}

/*
* *****************

! TERNARIES

* ****************
    -This is a quick wat of concidering an and if/else statment.  We are capable of writing out our conditional in a simple line.

*/

let myName = 'Nate';

//if(myName == 'Tina'){
 //   console.log('Hello, my name is ' + myName + ',');

//} else {
 //   console.log('hello, my name is ' + myName + '?');
//}


//? condition ? if true : else result

//    (1)                              (2)                                             (3)
myName === 'Eric' ? console.log(`hello, my name is ${myName}.`) : console.log(`Hello, is your name ${myName}?`);

/*
    1: Condition
    2: True (if true)
    3: False (else)
*///

//! CHALLENGE
// Take this if/else statement and make it into a ternary.
let lampOn = false;
let daytime = true;
if(lampOn == true && daytime != true) {
    console.log('The lamp is on during the night')
} else if(lampOn != true && daytime != true) {
    console.log('The lamp is off during the night')
} else if(lampOn == true && daytime == true){
    console.log('The lamp is on during the day')
} else if(lampOn != true && daytime == true) {
    console.log('The lamp is off during the day')
} else {
    console.log('What lamp?')
}

let lampOn = false;
let daytime = true;

lampOn == true && daytime != true ? console.log('the lamp is on during the night') : lampOn != true && daytime != true ? console.log('the lamp is off during the night') : lampOn == true && daytime == true ? console.log('The Lamp is on during the day.') : lampOn != true && daytime == true ? console.log('the lamp is off druing the day') : console.log('what lamp?');

/*
* **************

!SWITCH

* **************
    -executes a block of code depending on different cases.
*/

let instructor = 'Adam';

switch(instructor){
    case "Ing" :
        console.log(`${instructor}is part of the Web Dev Team.`);
        break;
     case 'Zach':
         console.log(`${instructor}is part of the Web Dev Team.`);
         break;
    case 'Josh' :
        console.log(`${instructor} is part of the Software Dev Team.`);
        break;
    default:
        console.log(`sorry, I can't find what ${instructor} teaches at this time`)
}

instructor = 'Zach'
switch(instructor){
    case 'ing':
    case 'Adam' :
    case 'Eric' :
    case 'Zach' :
    case 'Donovan':
        console.log(`${instructor} is part of the Web Dev team`);
        break;
    case 'Josh':
    case 'Amanda':
    case 'Casey' :
        console.log(`${instructor} is part of the Software Dev team.`);
        break;
    default:
        console.log(`Sorry, I can't find what ${instructor} teaches.`);

}

