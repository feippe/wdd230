window.onresize = function(event) {
    repositionBannerLabel();
};
document.addEventListener("DOMContentLoaded", function () {
    repositionBannerLabel();
});

function repositionBannerLabel(){
    let bannerPosition = document.querySelector('.hero-banner').getBoundingClientRect();
    document.querySelector('.hero-banner .hero-label').style.left = (bannerPosition.left + 16) + 'px';
    document.querySelector('.hero-banner .hero-label').style.top = (bannerPosition.top + 16) + 'px';
}