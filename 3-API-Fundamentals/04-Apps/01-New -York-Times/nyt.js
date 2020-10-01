const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1
const key = 'cwxyAktQuAsoo9GaqGrdwxmzwMtaiRvm'; //2
let url; //3

//SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

//RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav');

//RESULTS SECTION
const section = document.querySelector('section');

nav.style.display = "none";

let pageNumber = 0;
let displayNav = false;
//console.=log('pageNumber:', pageNumber)

//1             //2
searchForm.addEventListener('submit', fetchResults);
nextBtn.addEventListener('click', nextPage); //3
previousBtn.addEventListener('click', previousPage);  //3

            //1
function fetchResults(e){
    //console.log(e);
    e.preventDefault(); //1
    url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${searchTerm.value}`; //3

    if(startDate.value !== ''){
        //console.log(startDate.value)
    url += '&begin_date=' + startDate.value;
   // console.log("URL:", url)
    };

    if(endDate.value !== '') {
        //console.log(endDate.value)
        url += '&end_date=' + endDate.value;
        // console.log('URL:', url)
    }
    fetch(url)
        .then(function(result) {
            return result.json();
        //return result.json();  //2
})   . then(function(json) {
        displayResults(json);  //1 &  //3
});

    function displayResults(json) {
        //console.log("Display Results", json)
        
        while (section.firstChild) {
            section.removeChild(section.firstChild);
        }
    
        let articles = json.response.docs;

        if(articles.length === 0) {
            console.log("no results");
        } else {
            for(let i = 0; i < articles.length; i++) {
               let articles = document.createElement('article'); //1
                let heading = document.createElement('h2');  //2
              let link = document.createElement('a');
              let img = document.createElement('img');
              let para = document.createElement('p');
              let clearfix = document.createElement('div');

                let current = articles[i];

              console.log('Current:', current);

              link.href = current.web_url;
              link.textContent = current.headline.main;
              
                para.textContent = 'Keywords: '; 

                for(let j = 0; j < current.keywords.length; j++) {

                    let = span = document.createElement('span');

                    span.textContent += current.keywords[j].value + ' ';

                    para.appendChild(span);
               } 
               
               if(current.multimedia.length > 0){
                   img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                   img.alt = current.headline.main;
               }

                    clearfix.setAttribute('class', 'clearfix');
                }
                /*
                link to heading
                heading/img/para/clearfix/clearfix/ to article
                aritcle appended to section
                */
              article.appendChild(heading);
              heading.appendChild(link);
              article.appendChild(img);
              article.appendChild(para);
              article.appendChild(clearFix);  //3
              section.appendChild(article);  //4
            }
            if(articles.length === 10) {
                nav.style.display = 'block';  //shows the nav display if 10 times are in the array
    
            } else {
                nav.stayle.display = 'none';  //hides the nav display if less than 10 items are in the array
            }
    
        }


function nextPage(e){
    pageNumber++; 
    fetchResults(e);
    console.log("Page Number: pageNumber");
} //5

function previousPage(e){
    if(pageNumber > 0) {
        pageNumber--;
    } else {
        return;
    }
        fetchResults(e);
        console.log("page:", pageNumber);
    }
}  //5


