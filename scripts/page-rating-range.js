const pageratingvalue = document.getElementById("pageratingvalue");
const pagerating = document.getElementById("rngPageRating");

pagerating.addEventListener('change', displayPageRatingValue);
pagerating.addEventListener('input', displayPageRatingValue);

function displayPageRatingValue(){
    pageratingvalue.innerHTML = pagerating.value;
}