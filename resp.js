const burger = document.querySelector('.burger')
navbar = document.querySelector('.navbar')
navList = document.querySelector('.nav-list')
rightNav = document.querySelector('.rightNav')


burger.addEventListener('click', () => {
    rightNav.classList.toggle('v-class-resp');
    navList.classList.toggle('v-class-resp');
    navbar.classList.toggle('h-nav-resp');
})



const youtubeButton = document.getElementById('youtubeButton');
const instagramButton = document.getElementById('instagramButton');


const youtubeURL = 'https://www.youtube.com/@prajwal5090'; 
const instagramURL = 'https://www.instagram.com/praju_vanisaa/'; 

// Add click event listeners to the buttons
youtubeButton.addEventListener('click', () => {
    window.open(youtubeURL, '_blank'); 
});

instagramButton.addEventListener('click', () => {
    window.open(instagramURL, '_blank'); 
});
