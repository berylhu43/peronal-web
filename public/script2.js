
let currentImageIndex = 0;

const images = [
    './images/film1.png', 
    './images/film2.png', 
    './images/film3.png', 
    './images/film4.png'
];

const imgElement = document.getElementById('currentImage');

document.getElementById('nextBtn').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex + 1) % images.length;
    updateImage();
});

document.getElementById('prevBtn').addEventListener('click', () => {
    currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
    updateImage();
});

function updateImage() {
    imgElement.src = images[currentImageIndex];
}