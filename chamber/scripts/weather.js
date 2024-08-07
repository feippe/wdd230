const apiKey = '023f436055ba9902e9b75475c0609668';
const lat = '-34.90809556342869';
const lon = '-56.20471091841375';

const url = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appId=${apiKey}&units=imperial&lang=en`;
const urlImage = 'https://openweathermap.org/img/wn/';

async function apiFetch(){
    try {
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            displayResults(data);
        }else{
            throw Error(await response.text());
        }
    }catch(error){
        console.log(error);
    }
}

function displayResults(data){
    let counter = 0;
    let lastDay = 0;
    data.list.forEach(day => {
        let dt = new Date(day.dt * 1000);
        if(counter<3 && lastDay!=dt.getDate()){
            counter++;
            lastDay = dt.getDate();
            
            let temp = Math.round(day.main.temp);
            let icon = day.weather[0].icon;
            let description = day.weather[0].description;

            let dayCard = document.createElement('div');

            let optionsDate = { weekday: 'short', month: 'short', day: 'numeric' };
            let h3 = document.createElement('h3');
            h3.innerHTML = `${dt.toLocaleDateString("en-US",optionsDate)}`;
            
            let img = document.createElement('img');
            img.setAttribute('src',`${urlImage}${icon}.png`);
            img.setAttribute('alt',`${dt.toLocaleDateString("en-US",optionsDate)}, ${description}`);
            img.setAttribute('width','50');
            img.setAttribute('height','50');
            
            let h4 = document.createElement('h4');
            h4.className = 'pTemp';
            h4.innerHTML = `${temp}&deg;F`;
            
            let p = document.createElement('p');
            p.className = 'pDesc';
            p.innerHTML = `${description}`;
            
            dayCard.append(img);
            dayCard.append(h3);
            dayCard.append(h4);
            dayCard.append(p);

            document.querySelector('.card-weather').append(dayCard);
        }
    });
}

apiFetch();