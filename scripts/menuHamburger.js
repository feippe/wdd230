document.querySelector('#menu').addEventListener('click', () => {
	document.querySelector('.navigator').classList.toggle('show');
	document.querySelector('#bar-menu-mobile').classList.toggle('show');
	if(document.querySelector('.hero-banner')!==null){
		repositionBannerLabel();
	}
});