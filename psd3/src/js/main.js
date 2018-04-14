var Hamburger = document.getElementById('hamburger');

Hamburger.addEventListener('click', function(){
    
    var Nav = document.getElementById('nav');
    var TopBar = document.getElementById('top-bar');
    var TapToFly = document.getElementById('TapToFly');
    
    TopBar.classList.toggle('pos-fixed');
    Nav.classList.toggle('show');
    TapToFly.classList.toggle('addMargin')
});