const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

let chaptersArray = getChapterList() || [];

chaptersArray.forEach(chapter => {
    displayList(chapter);
});

button.addEventListener('click', function(){
    if(input.value != ''){
        displayList(input.value);
        chaptersArray.push(input.value);
        setChapterList();
        input.value = '';
        input.focus();
    }else{
        input.focus();
    }
});

function displayList(item){
    let liElement = document.createElement('li');
    liElement.textContent = item;
    let deleteButton = document.createElement('li');
    deleteButton.textContent = '❌';
    deleteButton.addEventListener('click', function(){
        list.removeChild(liElement);
        deleteChapter(liElement.textContent);
        input.focus();
    });
    liElement.append(deleteButton);
    list.append(liElement);
}

function deleteChapter(chapter){
    chapter = chapter.slice(0, chapter.length-1);
    chaptersArray = chaptersArray.filter((item) => item !== chapter);
    setChapterList();
}

function setChapterList(){
    localStorage.setItem('BOMList',JSON.stringify(chaptersArray));
}

function getChapterList(){
    return JSON.parse(localStorage.getItem('BOMList'));
}