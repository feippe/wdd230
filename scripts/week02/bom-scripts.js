const input = document.querySelector('#favchap');
const button = document.querySelector('button');
const list = document.querySelector('#list');

button.addEventListener('click', function(){
    if(input.value != ''){
        let liElement = document.createElement('li');
        liElement.textContent = input.value;

        let deleteButton = document.createElement('li');
        deleteButton.textContent = '❌';
        deleteButton.addEventListener('click', function(){
            list.removeChild(liElement);
            input.focus();
        });
        liElement.append(deleteButton);

        list.append(liElement);

        input.value = '';
        input.focus();

        

    }else{
        input.focus();
        //show a message
    }
});