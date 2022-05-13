console.log("Hello Developers...!!!!");

// Intialize the news api variables
let source = "bbc-news";
let apiKey = "6e17c976a5a94ebd9d9e4223ac467a1d";

// Grab the news container
let newsAccordion = document.getElementById("newsAccordion");

// Create an ajax get request
const xhr = new XMLHttpRequest();
xhr.open("GET", `https://newsapi.org/v2/top-headlines?sources=${source}&apiKey=${apiKey}`, true);

// xhr on load
xhr.onload = function () {
    if (this.status === 200) {
        let json = JSON.parse(this.responseText);
        let articles = json.articles;

        // console.log(articles);

        let newsHtml = "";

        articles.forEach(function (element, index) {
            // console.log(element, index);            
            let news = `<div class="col mb-4">
                            <div class="card shadow-sm bg-white rounded">
                                <img src="${element["urlToImage"]}" class="card-img-top" alt="...">
                                <div class="card-body">
                                    <h5 class="card-title">${element["title"]}</h5>
                                    <p class="card-text">${element["description"]}</p>
                                    <a href="${element["url"]}" target="_blank">Read More</a>
                                </div>
                            </div>
                        </div>`;
            newsHtml += news;
        });
        newsAccordion.innerHTML = newsHtml;
    }
    else {
        console.log("Error Hai Sujay");
    }
}

// sending request
xhr.send();

// search functionality
let search = document.getElementById('searchTxt');
search.addEventListener("input", function(){

    let inputVal = search.value;
    // console.log('Input event fired!', inputVal);
    let cards = document.getElementsByClassName('card');
    Array.from(cards).forEach(function(element){
        let cardTxt = element.getElementsByTagName("div")[0].innerText;
        if(cardTxt.includes(inputVal)){
            element.style.display = "block";
        }
        else{
            element.style.display = "none";
        }
        // console.log(cardTxt);
    });
});




