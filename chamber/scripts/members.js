const membersURL = "data/members.json";

async function getMembers(){
    const response = await fetch(membersURL);
    const data = await response.json();
    displayMembers(data);
}

function displayMembers(data){
    let membersContent = document.getElementById("membersList");
    data.members.forEach(member => {

        let memberContent = document.createElement('section');

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

        membersContent.append(memberContent);
    });

}

getMembers();


function showGridMembers(button){
    //document.getElementById('membersList').classList.toggle('grid');
    document.getElementById('membersList').className = "listOrGrid grid";
    document.querySelector('button.selected').classList.toggle('selected');
    button.className = "selected";
}

function showListMembers(button){
    document.getElementById('membersList').className = "listOrGrid list";
    document.querySelector('button.selected').classList.toggle('selected');
    button.className = "selected";
}