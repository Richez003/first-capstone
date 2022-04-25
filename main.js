const projects = [
  {
    id: 1,
    Images: '<img class="min-img" src="./images/bdo.webp" alt="man-img">',
    name: 'Bishop David Oyedepo',
    titles: 'Founder of Living Faith Church. aka winners Chapel.',
    duty: 'Out pouring of the spirit of God through His word by the man of God as He give ultrances.',
  },

  {
    id: 2,
    Images: '<img class="min-img1" src="./images/B-ASBIOYE.webp" alt="man-img">',
    name: 'Bishop Abioye',
    titles: 'vice president and senior pastor.',
    duty: 'Bishop Abioye was one of the seven foundation members of the church and in April 1987 when the first five branches of the ministry were to be established.',
  },

  {
    id: 3,
    Images: '<img class="min-img2" src="./images/Bishop Aremu.webp" alt="man-img">',
    name: 'Bishop Aremu',
    titles: 'Guest Speaker.',
    duty: 'Bishop Aremu is one of our honored guest who  will also be ministry to the youth.',

  },

  {
    id: 4,
    Images: '<img class="min-img3" src="./images/Pastor (Mrs) Faith Oyedepo.webp" alt="man-img">',
    name: 'Pastor (Mrs) Faith Oyedepo',
    titles: 'Guest Speaker.',
    duty: 'pastor (Mrs) Faith Oyedepo is the Vice President(Education) of the Living Faith International and her commitment and support to the ministry is unquantifiable.',
  },

  {
    id: 5,
    Images: '<img class="min-img4" src="./images/Pastor David Oyedepo Jnr.webp" alt="man-img">',
    titles: 'youth president, Host.',
    name: 'Pastor David Oyedepo Jnr',
    duty: 'Pastor David Oyedepo Jnr. is the First son of Bishop David Oyedepo and also the host of the program.',

  },

  {
    id: 6,
    Images: '<img class="min-img5" src="./images/Pastor Ojeme.webp" alt="man-img">',
    titles: 'Guest Speaker.',
    name: 'Pastor Ojeme',
    duty: 'pastor ojeme will also be ministrying live.',
  },

];

const projectCards = document.getElementById('js-card');
projectCards.innerHTML = projects.map(((project) => `
<div class="m-card">
<a>${project.Images}</a>
<div>
        <h4 class="Name">${project.name}</h4>
        <span class="title">${project.titles}</span>
        <p class="duty">${project.duty}</p>
</div>
</div>
  `)).join('');

const openMenu = document.querySelector('.menu-nav');
const closeMenu = document.querySelector('.closeMenu');
const mobileMenu = document.querySelector('.mobileMenu');

openMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'flex';
});

closeMenu.addEventListener('click', () => {
  mobileMenu.style.display = 'none';
});