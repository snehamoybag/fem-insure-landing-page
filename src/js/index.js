// STYLESHEET
import '/scss/style.scss';

// Humburger Menu
const hamburgerBtnEl = document.querySelector('#btn-nav-hamburger');
const navHeaderMenuEl = document.querySelector('#nav-header-list');

hamburgerBtnEl.addEventListener('click', () => {
  const isOpen = hamburgerBtnEl.getAttribute('aria-expanded') === 'true';
  
  (isOpen) ? closeMenu() : openMenu();
});

function openMenu() {
  hamburgerBtnEl.setAttribute('aria-expanded', 'true');
  navHeaderMenuEl.setAttribute('data-state', 'opened');
  // prevents body scroll when menu is open
  document.body.classList.add('overflow', 'overflow--y-hidden');
};

function closeMenu() {
  hamburgerBtnEl.setAttribute('aria-expanded', 'false');
  navHeaderMenuEl.setAttribute('data-state', 'closing');
  // adding 'display: none' when animation ends 
  navHeaderMenuEl.addEventListener('animationend', () => {
    navHeaderMenuEl.setAttribute('data-state', 'closed');
  }, {once: true});  // adds the eventlistener for once
  // makes body scrollable again
  document.body.classList.remove('overflow', 'overflow--y-hidden');
};