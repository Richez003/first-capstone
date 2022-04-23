const openMenu = document.querySelector('.menu-nav');

const closeMenu = document.querySelector('.closeMenu');

const mobileMenu = document.querySelector('.mobileMenu');

openMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});