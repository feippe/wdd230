let menuIcon = document.querySelector('#menu-icon');
let menuOptions = document.querySelector('nav');

menuIcon.addEventListener('click', function(){
    menuIcon.classList.toggle('close');
    menuOptions.classList.toggle('show');
});

if (Date.parse(document.lastModified) != 0){
    let lastModification = `Last Modification: ${document.lastModified}`;
    document.getElementById("lastModification").innerHTML = lastModification;
}

