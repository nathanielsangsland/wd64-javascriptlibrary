// Write an object literal that stores information about your favorite movie.  nameOfMovie, runTime, characters and genre should be keys directly inside the object.

// chararcters will be an array taht should store no more than 2 characters objects, each of which stores name, age, and items.

// items iself will also be an array that should store no more than 2 item oibjects.  These item onbjects can have key-value pairs of whatever you would like (ex. {itemOne: 'Bow and Arrow}).


Let  lotrObj = {
nameOfMovie: 'Lord of the Rings: The Fellowship of the Ring'
runTime: 288,
character: [
    {
            name: 'legolas',
            age: 2931,
            items: [
                {itemOne: 'Bow and Arrow'},
                {itemTwo: 'Dagger'},
            ],
    },
    {
        name: 'Gandalf',
        age: 2019,
        items: [
            {itemOne: 'Sword'},
            {itemTwo: 'Staff'},
        ],
    },
],
genre: 'Action & Adventrue'

}

// Use Console.log statements to show that you can print out the nameOfMovies, the characters, the name of characters, and one of the 