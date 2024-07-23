const membersURL = "data/members.json";

async function getSpotlight(){
    const response = await fetch(membersURL);
    const data = await response.json();

    let onlySilverAndGold = data.members.filter(filterSpotlight);
    displaySpotlight(shuffleAndGetThree(onlySilverAndGold));
}

function filterSpotlight(member){
    return member.membershipLevel=="Gold" || member.membershipLevel=="Silver";
}

function shuffleAndGetThree(array){
    let i = array.length, j, temp;
    while (--i > 0) {
        j = Math.floor(Math.random() * (i+1));
        temp = array[j];
        array[j] = array[i];
        array[i] = temp;
    }
    return [
        array[0],
        array[1],
        array[2]
    ];
}

function displaySpotlight(members){
    let spotlightSection = document.querySelector(".spotlight-section .spotlight-content");
    members.forEach(member => {
        if(member.membershipLevel=="Gold" || member.membershipLevel=="Silver"){
            let memberContent = document.createElement('section');
            memberContent.className = "spotlightMember";

            let level = document.createElement('div');
            level.className = `tagLevel ${member.membershipLevel}`;
            level.textContent = member.membershipLevel;
            memberContent.append(level);
            
            let icon = document.createElement('div');
            icon.className = "iconSpace";
            icon.innerHTML = member.icon;
            memberContent.append(icon);

            let name = document.createElement('div');
            name.className = "nameSpace";
            name.textContent = member.name;
            memberContent.append(name);

            let phone = document.createElement('a');
            phone.className = "phoneSpace";
            phone.setAttribute('href',`tel:${member.phoneNumber}`);
            phone.textContent = member.phoneNumber;
            memberContent.append(phone);

            let address = document.createElement('div');
            address.className = "addressSpace";
            address.textContent = `${member.address}, ${member.city}, ${member.country}`;
            memberContent.append(address);

            let url = document.createElement('a');
            url.className = "urlSpace";
            url.setAttribute('href',member.websiteUrl);
            url.textContent = member.websiteUrl.replace('http://','');
            memberContent.append(url);

            spotlightSection.append(memberContent);
        }
    });

}

getSpotlight();