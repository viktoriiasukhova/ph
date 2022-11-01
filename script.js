let indexMenu = document.querySelector('.index');
let navMenu = document.querySelector('.nav-menu');
let galleryWrapper = document.querySelector('.gallery-wrapper');
let galleryContainer = document.querySelector('.gallery-container');
let overlay = document.querySelector('.overlay');
indexMenu.addEventListener('click', () => {
    indexMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    galleryContainer.classList.toggle('active');
    galleryWrapper.classList.toggle('active');
    overlay.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    indexMenu.classList.remove('active');
    navMenu.classList.remove('active');
    galleryWrapper.classList.remove('active');
   galleryContainer.classList.remove('active');
   overlay.classList.remove('active');
}));

let closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', () => {
    indexMenu.classList.remove('active');
    navMenu.classList.remove('active');
    galleryContainer.classList.toggle('active');
    galleryWrapper.classList.toggle('active');
    overlay.classList.toggle('active');
});

