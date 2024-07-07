let menuIcon = document.querySelector('#menu-icon');
let menuOptions = document.querySelector('nav');
let lastVisit = getLastVisit() || null;

document.addEventListener("DOMContentLoaded", function () {
    if (Date.parse(document.lastModified) != 0){
        let lastModification = `Last Modification: ${document.lastModified}`;
        document.getElementById("lastModification").innerHTML = lastModification;
    }
    showLastVisitInDiscover();
});

menuIcon.addEventListener('click', function(){
    menuIcon.classList.toggle('close');
    menuOptions.classList.toggle('show');
});

function showLastVisitInDiscover(){
    const today = Date.now();
    let element = document.querySelector('#pVisitMessage');
    if(element!==null){
        if(lastVisit==null){//first time
            element.textContent = "Welcome! Let us know if you have any questions.";
            lastVisit = today;
            setLastVisit();
        }else{
            let hours = ((((today-lastVisit)/1000)/60)/60);
            if(hours<24){
            element.textContent = "Back so soon! Awesome!";
            }else{
            let days = Math.floor(hours/24);
            let dayText = "s";
            if(days<=1){ dayText = ""; }
            element.textContent = `You last visited ${days} day${dayText} ago.`;
            }
        }
    }
}

function getLastVisit(){
    return localStorage.getItem('last-visit');
}

function setLastVisit(){
    localStorage.setItem('last-visit',lastVisit);
}



/* JOIN PAGE FUNCTIONS */

if(document.querySelector('#level-np')!==null){
    document.querySelector('#level-np').addEventListener('click',function(){
        radioLevelSelected(this.value);
    });
    document.querySelector('#level-bronze').addEventListener('click',function(){
        radioLevelSelected(this.value);
    });
    document.querySelector('#level-silver').addEventListener('click',function(){
        radioLevelSelected(this.value);
    });
    document.querySelector('#level-gold').addEventListener('click',function(){
        radioLevelSelected(this.value);
    });
}


function radioLevelSelected(value){
    document.querySelector('#data-level-np').style.display='none';
    document.querySelector('#data-level-bronze').style.display='none';
    document.querySelector('#data-level-silver').style.display='none';
    document.querySelector('#data-level-gold').style.display='none';
    switch(value) {
        case 'NP':
            document.querySelector('#data-level-np').style.display='block';
            break;
        case 'Bronze':
            document.querySelector('#data-level-bronze').style.display='block';
            break;
        case 'Silver':
            document.querySelector('#data-level-silver').style.display='block';
            break;
        case 'Gold':
            document.querySelector('#data-level-gold').style.display='block';
            break;
      }
}
