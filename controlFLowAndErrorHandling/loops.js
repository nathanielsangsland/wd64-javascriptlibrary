/*
* ***************

! FOR LOOPS

* ***************
    -Loops help us repeat a process without writing a lot of code.

    we need to :
        1) Create an Index
        2) Run a condition
        3) Change to the indexing varible (execution of condition)
*/ 

for(let i = 0; i <= 10; i++) {
    console.log(i);
}

/*
    We state our loop with a "for".
    Within this function, we are injecting some parameters that JS will run against
        (index; condition; change index -> result)

        for(<create index varible>); <run condition>; <change index>) {
            <return results>
            *will cont. unitll run condition is met.
        }

*/

/*let x = 20
let i = 10

for(i =10; i <=x; i++){
    console.log(i);
}
*/

//! CHALLENGE
//* Using a for loop, set an index to 2. Make a condition where if that number is greater than -10, change that index by subtracting 4 and console each iteration.

for(let i =2; i >= -10; i -=4){
    console.log (i);
}

let word= 'supercalifragilisticexplialidocious';

for (let i= 0; i < word.length; i++){
    console.log(i, word[i]);
}


/*
* ************
! FORIN LOOP

* ************
*/

let city = {
    name: 'indianapolis',
    pop: 877000,
    speeday: true
};

for(info in city) {
    console.log(info)
    console.log(city[info]);
}

/* 
    for(variable IN object) {
        <statement>
    }
*/

let list =['milk', 'eggs', 'beans', 'bread', 'bananas'];

for(item in list) {
   // console.log(item);
    console.log(list[item]);


}

//! CHALLENGE
//* What if a user input their name in an odd way and we want to display it correctly.
let name = 'piCard';
//* Write a for-in loop that pulls in the name, changes each letter to the proper case and then console.log the results.

let fullName =[];

for(char in name) {
   // let lowChar = name[char].toLowerCase();
   // console.log(lowChar);
    char == 0 ? fullName = name[char].toUpperCase() : fullName += name[char].toLowerCase();
    // console.log(fullname)
}

console.log(fullName);

/*
1) We are taking the value of the "n" index and declaring the position of 0
2) We assing our empty varible to equal that positioned value.
3) If that index is 0, we will take that value and run a ".toUppercase() "" methnod" on it.
4) IF the index in BOt 0, we still want to include it ino our empty varible and utilize our += expression so it knows to add the next vaule
(or n++)
5) IF the index is NOT 0, we want to fun a ".tolowerCase()" methoud so that all letters are in proper case

/*
* ************
! FOROF LOOP
* ***********
    -In orer to run a FOR OF loop, the "thing" must be  numbered like an array.

    let object = {
            key: value,
            key: value,
            key: value
    };
        for(o of object) {
            <breaks>
        }
    }
*/

let indexArr = ['spot 1' , 2, true, 'four'];

for(pos of indexArr) {
    console.log(pos);
}

/*
? Quick Recap:
    for loop: loops through a block of code unitl the counter reaches a specified number.
    for in loops: loops through properties of an object.
    for of loops: loops over iterable objects as an arrays and strings * stings cab ne accesad much in the same way as arrays!
