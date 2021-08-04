const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';   // Declaring baseURL of the API, which is required for API endpoint
const key = 'SCZrRgHl8UAUWFVKK0X6OKogZvvfjure'; // Gives us access to the API
let url; // Creating url variable, which is not defined yet (used to make a dynamic search url)

// SEARCH FORM
const searchTerm = document.querySelector('.search'); // creating variables and telling them which part of the html they are assigned to.
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

// RESULTS NAVIGATION
const nextBtn = document.querySelector('.next');
const previousBtn = document.querySelector('.prev');
const nav = document.querySelector('nav'); // creating variable to select the <nav> tag in html

// RESULTS SECTION
const section = document.querySelector('section'); // creating variable to select the <section> tag in html

nav.style.display = 'none'; // this is telling the "previous" and "next button" (which are nested within the <nav> tag) to not display on page 0
let pageNumber = 0;
let displayNav = false; // however, it is false and not on page 0 then both buttons will display


searchForm.addEventListener('submit', fetchResults); // searchForm targets the variable we previously made - we add the addEventListener, which has
nextBtn.addEventListener('click', nextPage);         // an event (submit, click) and a callback function
previousBtn.addEventListener('click', previousPage);



function fetchResults(e) {    // creating function called fetchResults
    e.preventDefault();       // makes sure pages does NOT refresh when we submit/click the "submit button"
    url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q' + searchTerm.value;  // setting url equal to variables and concatinating them with URL encoding and the value of the searchTerm variable
    console.log('URL:', url); // we are putting what we just made (url = ) in the console

    if(startDate.value !== ''){         // if the value of startDate is equal to something (has some input in it) then run the function
        console.log(startDate.value)    // putting value of startDate in console
        url += '&begin_date' + startDate.value; // adding the value of startDate on to the url
    };

    if(endDate.value !== ''){     // if the value of endDate is equal to something (has some input) then run the function
        url += '&end_date=' + endDate.value;
    };

    fetch(url)  // 
    .then(function(result){   // returns a promise, which is a function
        return result.json(); // obtaining json
    })
    .then(function(json){    // taking json and then using the displayResults function the json
        displayResults(json);
    })
};

function displayResults(json){   // creating a displayResults function

    while (section.firstChild){
        section.removeChild(section.firstChild);
    }

    let articles = json.response.docs; // creating an articles variable that is equal to dot notations

    if(articles.length === 10){        // creating "if-else" statement - if the length of articles is stricly equal to 10 then...
        nav.style.display = 'block';   // display the nav as 'block' else display the nav as 'none'
    } else {
        nav.style.display = 'none';
    }
    
    if(articles.length === 0){       // creating "if-else" statement - if the length of articles is stricly equal to 0 then...
        console.log('No results');   // put 'no results' in console else run the "for loop" below
    } else {
        for(let i = 0; i < articles.length; i ++){  // creating "for loop" that 
            let article = document.createElement('article');
            let heading = document.createElement('h2');
            let link = document.createElement('a');
            let img = document.createElement('img');
            let para = document.createElement('p');
            let clearfix = document.createElement('div');

            let current = articles[i]
            console.log('Current:', current);

            link.href = current.web_url;
            link.textContent = current.headline.main;

            for(let j = 0; j < current.keywords.length; j ++){
                let span = document.createElement('span');
                span.textContent += current.keywords[j].value + ' ';
                para.appendChild(span);
            }

            if(current.multimedia.length > 0){
                img.src = 'http://www.nytimes.com/' + current.multimedia[0].url;
                img.aly= current.headline.main;
            }

            clearfix.setAttribute('class', 'clearfix');

            article.appendChild(heading);
            heading.appendChild(link);
            article.appendChild(img);
            article.appendChild(para);
            article.appendChild(clearfix);
            section.appendChild(article);
        }
    }
};

function nextPage(e){
    pageNumber ++;
    fetchResults(e);
    console.log('Page number:'. pageNumber);
}

function previousPage(e){
    if(pageNumber > 0){
        pageNumber --;
    } else {
        return;
    }
    fetchResults(e);
    console.log('Page:', pageNumber);
}