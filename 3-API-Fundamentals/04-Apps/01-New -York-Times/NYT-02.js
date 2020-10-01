const baseURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json";   // declare the bs e URl of the API endpoint for the New York Times Data
const key = 'cwxyAktQuAsoo9GaqGrdwxmzwMtaiRvm'  //Key code form the New York Times Website
let url;                                        // declared the varible url

// SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTON
const section = document.querySelector('section');

//nav.style.display ='none';

let pageNumber = 0;
let displayNav = false;

searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

function fetchResults(e){
    console.log(e);

url = baseURL + `api-key=` + key + '&gpage' + pageNumber + '&q=' + searchTerm.value;
console.log(url)
}

function nextPage(){
    console.log ("next button clicked");
}

function previousPage(){
    console.log("Next Button Clicked")
}

