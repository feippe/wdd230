const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';
const cards = document.querySelector('#cards');

async function getProphetData(){
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets=(prophets)=> {
    prophets.forEach(prophet => {
        let card = document.createElement('section');
        let fullName = document.createElement('h2');
        let birthDate = document.createElement('p');
        let birthPlace = document.createElement('p');
        let portrait = document.createElement('img');

        fullName.textContent = `${prophet.name} ${prophet.lastname}`;
        card.append(fullName);

        birthDate.textContent = `Date of Birth: ${prophet.birthdate}`;
        card.append(birthDate);

        birthPlace.textContent = `Place of Birth: ${prophet.birthplace}`;
        card.append(birthPlace);

        portrait.setAttribute('src',prophet.imageurl);
        portrait.setAttribute('alt',fullName.textContent);
        portrait.setAttribute('loading','lazy');
        portrait.setAttribute('width',1920);
        portrait.setAttribute('height',2378);
        card.append(portrait);

        cards.append(card);
    });
}

getProphetData();