let mainHeader = document.getElementById('main-header');
let wrapper = document.querySelector('.wrapper');
let indexMenu = document.querySelector('.index');
let navMenu = document.querySelector('.nav-menu');
let galleryContainer = document.querySelector('.gallery-container');
let overlay = document.querySelector('.overlay');
indexMenu.addEventListener('click', () => {
    wrapper.classList.toggle('active');
    mainHeader.classList.toggle('active');
    indexMenu.classList.toggle('active');
    navMenu.classList.toggle('active');
    galleryContainer.classList.toggle('active');
    overlay.classList.toggle('active');
});

document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    wrapper.classList.remove('active');
    mainHeader.classList.remove('active');
    indexMenu.classList.remove('active');
    navMenu.classList.remove('active');
    galleryContainer.classList.remove('active');
    overlay.classList.remove('active');
}));

let closeButton = document.querySelector('.close-button');
closeButton.addEventListener('click', () => {
    wrapper.classList.toggle('active');
    mainHeader.classList.toggle('active');
    indexMenu.classList.remove('active');
    navMenu.classList.remove('active');
    galleryContainer.classList.toggle('active');
    overlay.classList.toggle('active');
});

function lock (orientation) {
    // (A1) GO INTO FULL SCREEN FIRST
    let de = document.documentElement;
    if (de.requestFullscreen) { de.requestFullscreen(); }
    else if (de.mozRequestFullScreen) { de.mozRequestFullScreen(); }
    else if (de.webkitRequestFullscreen) { de.webkitRequestFullscreen(); }
    else if (de.msRequestFullscreen) { de.msRequestFullscreen(); }
  
    // (A2) THEN LOCK ORIENTATION
    screen.orientation.lock(orientation);
  }

  // (B) UNLOCK SCREEN ORIENTATION
function unlock () {
    // (B1) UNLOCK FIRST
    screen.orientation.unlock();
  
    // (B2) THEN EXIT FULL SCREEN
    if (document.exitFullscreen) { document.exitFullscreen(); }
    else if (document.webkitExitFullscreen) { document.webkitExitFullscreen(); }
    else if (document.mozCancelFullScreen) { document.mozCancelFullScreen(); }
    else if (document.msExitFullscreen) { document.msExitFullscreen(); }
  }
