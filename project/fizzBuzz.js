/*
! FIZZBUZZ WHITEBOARDING CHALLENGE (pair coding)
************
    - create a variable named FB that gets initialized with a number
    - write a conditional that:  - 100 range
        - prints out "Fizz" if the number is divisible by 3
        - prints out "Buzz" if the number is divisible by 5
        - prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
        - otherwise, prints the number
*/


for (let i=1; i < 101; i++) {
    if (i % 15 ==0) console.log("FizzBuzz");
    else if (i % 3 == 0) console.log("Fizz");
    else if (i % 5 == 0) console.log('buzz');
    else console.log (i);
    
}

//for (let i=0;i<100;)console.log((++i%3'':'fizz') + (i%5? '':"buzz")||i)


// 

// for(for fb = 1; fb <=100; fb++) {
//     let fizz = fb%3 == 0;
//     let buzz = fb%5 == 0;
//     console.log(fizz ? (buzz ? "fizz Buzz" : "Fizz") : (buzz ? "Buzz" : fb))
// }

for(let fb=0; fb <=100; fb++){
    if(fb % 15 == 0) console.log ('Fizz Buzz');
    else if (fb % 5 == 0) console.log('Buzz');
    else if (fb % 3 == 0) console.log("fizz");
    else console.log(fb);
}

let fb = 15;

(fb % 3 === 0 && fb % 5 === 0) ? console.log('Fizz Buzz') :
(fb % 5 ===0) ? console.log('Buzz') :
(fb % 3 ===0) ? console.log('Fizz') : console.log(fb);