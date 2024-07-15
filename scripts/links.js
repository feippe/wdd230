const baseURL = "https://feippe.github.io/wdd230/";
const linksURL = "data/links.json";

async function getLinks(){
    const response = await fetch(linksURL);
    const data = await response.json();
    displayLinks(data);
}

function displayLinks(data){
    let ul = document.getElementById("learningActivitiesList");
    data.weeks.forEach(week => {
        let li = document.createElement('li');
        li.textContent = `${week.week}: `;
        week.links.forEach(link => {
            let a = document.createElement('a');
            a.textContent = link.title;
            a.setAttribute('href',link.url);
            li.append(a);
        });
        ul.append(li);
    });

}

getLinks();