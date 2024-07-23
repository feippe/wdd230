
function loadModalBanner(){
    let modalBanner = document.createElement('div');
    modalBanner.className = "modal-banner";

    let modalContent = document.createElement('div');
    modalContent.className = "modal-content";

    let closeButton = document.createElement('span');
    closeButton.className = "modal-close-button";
    closeButton.innerHTML = "&times;";
    closeButton.onclick = function() {
        modalBanner.style.display = "none";
    }
    modalContent.append(closeButton);

    let infoContent = document.createElement('div');
    infoContent.className = "modal-info-content";

    let h2 = document.createElement('h2');
    h2.textContent = "Meet&Greet";
    infoContent.append(h2);

    let h3 = document.createElement('h3');
    h3.textContent = 'Chamber of Commerce';
    infoContent.append(h3);

    let p = document.createElement('p');
    p.textContent = "Attend our Meet&Greet next Wednesday at 7pm.";
    infoContent.append(p);

    modalContent.append(infoContent);

    modalBanner.append(modalContent);

    let body = document.querySelector('body');
    body.append(modalBanner);

    window.onclick = function(event) {
        if (event.target == modalBanner) {
            modalBanner.style.display = "none";
        }
    }

}




let today = new Date();
if(today.getDay()== 1 || today.getDay()== 2 || today.getDay()== 3){
    loadModalBanner();
}
