var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

if (navMain) {
  navMain.classList.remove('main-nav--nojs');
}

if (navToggle) {
  navToggle.classList.add('main-nav__toggle--show');
  navToggle.addEventListener('click', function() {
    navMain.classList.toggle('main-nav--closed');
    navMain.classList.toggle('main-nav--opened')
  });
}
