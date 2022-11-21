window.addEventListener('load', ()=> {
    const loader = document.querySelector('.loader');

    loader.classList.add('loader-hidden');

    loader.addEventListener('transitionend', ()=>{
        document.body.removeChild(loader);
    })
});


let mainHeader = document.getElementById('main-header');
let wrapper = document.querySelector('.wrapper');
let indexMenu = document.querySelector('.index');
let navMenu = document.querySelector('.nav-menu');
let galleryWrapper = document.querySelector('.gallery-wrapper');
let overlay = document.querySelector('.overlay');
let modalContent = document.querySelector('.modalContent');
let modal = document.querySelector('.modal');
indexMenu.addEventListener('click', () => {
    wrapper.classList.toggle('active');
    mainHeader.classList.toggle('active');
    indexMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    galleryWrapper.classList.toggle('active');
    overlay.classList.toggle('active');
    modalContent.classList.toggle('active');
    modal.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    wrapper.classList.remove('active');
    mainHeader.classList.remove('active');
    indexMenu.classList.remove('active');
    navMenu.classList.remove('active');
    galleryWrapper.classList.remove('active');
    overlay.classList.remove('active');
    modalContent.classList.remove('active');
    modal.classList.remove('active');
}));

let closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', () => {
    wrapper.classList.toggle('active');
    mainHeader.classList.toggle('active');
    indexMenu.classList.remove('active');
    navMenu.classList.remove('active');
    galleryWrapper.classList.toggle('active');
    overlay.classList.toggle('active');
    modalContent.classList.toggle('active');
    modal.classList.toggle('active');
});

// Open the Modal
function openModal() {
    document.getElementById("myModal").style.display = "block";
    galleryWrapper.style.display = 'none';
    if (galleryContainer.style.display === 'none'){
        document.getElementById("myModal").style.display = "block";
    }else {
        galleryContainer.style.display = 'block';
    }
}

// Close the Modal
function closeModal() {
    document.getElementById("myModal").style.display = "none";
    galleryWrapper.style.display = 'block';
}

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
    showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("mySlides");

    if (n > slides.length) { slideIndex = 1 }
    if (n < 1) { slideIndex = slides.length }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slides[slideIndex - 1].style.display = "block";
}
