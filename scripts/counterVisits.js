let counterVisits = getCounterVisits() || 0;

function getCounterVisits(){
    return parseInt(localStorage.getItem('counter-visits'));
}

function setCounterVisits(){
    localStorage.setItem('counter-visits',counterVisits);
}

function showCounterVisits(){
    document.querySelector("#counterVisits").textContent = counterVisits;
}

document.addEventListener("DOMContentLoaded", function () {
    counterVisits += 1;
    setCounterVisits();
    showCounterVisits();
});