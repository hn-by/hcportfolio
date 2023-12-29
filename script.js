const body = document.querySelector('body');
const quoteTab = document.querySelector('.quoteTab');
const quote = document.querySelector('.quote');
const author = document.querySelector('.author');

body.addEventListener("click", getQuote)

function getQuote() {
    fetch("http://quotable.io/random")
        .then(res => res.json())
        .then(data => {
            quote.textContent =  '"' + data.content + '"';
            author.textContent = '-' + data.author;
        })
}


