const apiKey = '2f8ba8c64e57372c7d989dd57148884e';
const lat = '-34.90809556342869';
const lon = '-56.20471091841375';

const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=imperial&lang=en`;
const urlImage = 'https://openweathermap.org/img/w/';

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
    let liTemp = document.getElementById('temp-data');

    let iconWeather = document.createElement('img');
    iconWeather.setAttribute('src',`${urlImage}${data.weather[0].icon}.png`);
    iconWeather.setAttribute('alt',data.weather[0].description);
    iconWeather.setAttribute('width','20');
    iconWeather.setAttribute('height','20');
    liTemp.append(iconWeather);

    let labelTemp = document.createElement('label');
    labelTemp.innerHTML = `${data.main.temp}&deg;F - ${data.weather[0].description}`;
    liTemp.append(labelTemp);
}

apiFetch();