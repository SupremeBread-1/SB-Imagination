// alert('works');
window.onscroll = function() {myFunction()};

var nav = document.getElementById('navigator');

var sticky = nav.offsetTop;

var xs = document.getElementById('xs');

function myFunction() {
    if (window.pageYOffset > sticky) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
}

xs.addEventListener('click', removeAd);

function removeAd() {
    document.getElementById('top-ad').style.display = 'none';
}