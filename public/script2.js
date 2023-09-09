
let currentImageIndex1 = 0;
let currentImageIndex2 = 0;

const images1 = [
    './images/film4.png', 
    './images/film2.png', 
    './images/film3.png', 
    './images/film1.png'
];

const images2 = [
    './images/film7.png', 
    './images/film8.png', 
    './images/film5.png', 
    './images/film6.png'
];

const imgElement = document.getElementById('currentImage1');

document.getElementById('nextBtn').addEventListener('click', () => {
    currentImageIndex1 = (currentImageIndex1 + 1) % images1.length;
    updateImage();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentImageIndex1 = (currentImageIndex1 - 1 + images1.length) % images1.length;
    updateImage();
});

function updateImage() {
    imgElement.src = images1[currentImageIndex1];
}



const imgElement1 = document.getElementById('currentImage2');

document.getElementById('nextBtn1').addEventListener('click', () => {
    currentImageIndex2 = (currentImageIndex2 + 1) % images2.length;
    updateImage1();
});

document.getElementById('prevBtn1').addEventListener('click', () => {
    currentImageIndex2 = (currentImageIndex2 - 1 + images2.length) % images2.length;
    updateImage1();
});

function updateImage1() {
    imgElement1.src = images2[currentImageIndex2];
}