//? LENGTH

// We can use a method called length() that can tell us how many values are within our array.

let long = [1,2,3,4,5,6,7,8,9,10];
console.log(long.length);

let colors = ['blue', 'green', 'yelllow', 'red', 'orange', 'purple'];
console.log(colors.length);

console.log(colors);
console.log(colors.toString());

let bool = [true, true, false, null];
console.log(bool.toString();)


//? ITERATING

/*
    for Each -
        - the forEach() method executes a provided function once for each element in an array - muck like a for loop or a for of loop.

        - runs three arguments:
        1. THe Value
        2. The Index
        3. The array object itself
*/

let foodlist= ['apple', 'pear', 'mushroom', 'cheese', 'peach'];

//for(let i = 0; i < foodlist.length; i++){
//    console.log(i, foodlist[i]);
//}

foodlist.forEach(foodItem => console.log(foodItem));

//function print(callback){
//    callback();
//}

foodlist.forEach((foodItem, index) => {
    console.log(foodItem)
    console.log(index)

});

// - the second position of the parameter is ALWAYS the index.
 

/*
! CHALLENGE
* *********
    - (Go look at MDN docs to remind you):
    - Create an array containing movies
    - Use .forEach() to list your movies
    - add another movie at the end
    - And replace one of your existing movies with another one

*/

//let movielist=['Shrek', 'Fight Club','The Big Leobowski', 'Shawshank Redemption', 'The Dark Knight' ];

//foodlist.forEach((foodItem => console.log foodItem));


let movies = ['Shrek', 'Fight Club','The Big Leobowski', 'Shawshank Redemption'];
console.log('Before');
movies.forEach(movie => console.log(movie));
movies.push('movie 4');
movies.splice(0.1.'movie 5')
console.log('after');
movies.forEach(movies => console.log(movies))