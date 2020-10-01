

const btn = document.getElementById('getFacts');
btn.addEventListener('click', getFacts);

//const totalCon = document.querySelector('ul')

function getFacts(e) {
    e.preventDefault();
    fetch('https://api.covid19api.com/summary')
    .then(results => {
        return results.json()

    })
    .then(json => {
        displaySummary(json);
        
    })
   
};

function displaySummary(data){
    const displayinfo = data.Countries[179].TotalConfirmed
    console.log(displayinfo)
    console.log('DisplaySummary: ', data);

    document.getElementById('myData').innerHTML = `Total Confirmed cases of Covid 19 in the US ${displayinfo}`;

    
};








/*for(let i = 0; i < country.length; i++){
    console.log(i, countrylist[i]);
}*/

