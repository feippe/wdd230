document.addEventListener("DOMContentLoaded", function () {
  putYearInFooter();
  putLastModificationInFooter();
});

function putYearInFooter() {
  const date = new Date();
  let year = date.getFullYear();
  document.getElementById("footerYear").innerHTML = year;
}

function putLastModificationInFooter() {

  if (Date.parse(document.lastModified) != 0){
    let lastModification = `Last Modification: ${document.lastModified}`;
    document.getElementById("lastModified").innerHTML = lastModification;
  }
    


  /*let lastModification = "01/01/1970 12:00:00";
  const date = new Date();
  lastModification = new Intl.DateTimeFormat('es-UY', { day: '2-digit', month: '2-digit', year: 'numeric', hour:'2-digit', minute:'2-digit', second:'2-digit' });
  lastModification = lastModification.format(date);
  lastModification = `Last Modification: ${lastModification}`;
  document.getElementById("lastModified").innerHTML = lastModification;*/
}


