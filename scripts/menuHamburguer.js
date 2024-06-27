

document.querySelector('#menu').addEventListener('click', () => {
    console.log('click');
	document.querySelector('.navigator').classList.toggle('show');
	document.querySelector('#menu').classList.toggle('show');
});