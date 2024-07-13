const currentTemp = document.querySelector('#current-temp');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('figcaption');

const apiKey = '2f8ba8c64e57372c7d989dd57148884e';
const lat = '49.749859378415486';
const lon = '6.633071607670368';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial&lang=en`;

const urlImage = 'https://openweathermap.org/img/w/';

async function apiFetch(){
    try {
        const response = await fetch(url);
        if(response.ok){
            const data = await response.json();
            /*console.log(data);
            console.log(data.main.temp);
            console.log(data.weather[0].description);
            console.log(data.weather[0].icon);*/
            displayResults(data);
        }else{
            throw Error(await response.text());
        }
    }catch(error){
        console.log(error);
    }
}

function displayResults(data){
    currentTemp.innerHTML = `${data.main.temp}&deg;F`;
    const iconsrc = `${urlImage}${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src',iconsrc);
    weatherIcon.setAttribute('alt',desc);
    captionDesc.textContent = data.weather[0].description;
}

apiFetch();