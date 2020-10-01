//console.log('Test');

const baseURL = 'https://api.spacexdata.com/v2/rockets';

const searchForm = document.querySelector('form');
const spaceShips = document.querySelector('ul');

//eventListener
searchForm.addEventListener('submit', fectchSpace);


//FETCH FUNCTION
function fectchSpace(e) {
    e.preventDefault();  // this method allows us to cancel a default action by the browswer.
   // console.log('Clicked');
   fetch(baseURL)// starts the process of fetching from our resource
    .then(results => {
        //console.log(results) // show our response
        return results.json() // This method takes in a response (results), reads to completion and resturns the results as a json format
    })
    .then(json => {
        //console.log(json)
        displayRockets(json);
    });
}

// DISPLAY FUNCTION
function displayRockets(data) {
    console.log('DisplayRockets: ',data);

    let rockets = data.forEach(r => {
        console.log(r);
        let rockets = document.createElement('li');  // create an li tag
        rockets.innerText = `${r.name} is in the country ${r.country}`;
        spaceShips.appendChild(rocket);
    });
}

