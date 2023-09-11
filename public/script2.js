

let currentImageIndex1 = 0;
let currentImageIndex2 = 0;
let currentImageIndex3 = 0;

const images1 = ['./images/film4.png', './images/film2.png', './images/film3.png', './images/film1.png'];
const images2 = ['./images/film7.png', './images/film8.png', './images/film5.png', './images/film6.png'];
const images3 = ['./images/film9.png', './images/film10.png'];

function addEventListeners(imageId, nextBtnId, prevBtnId, imagesArray, index) {
    const imgElement = document.getElementById(imageId);
    
    document.getElementById(nextBtnId).addEventListener('click', () => {
        index = (index + 1) % imagesArray.length;
        imgElement.src = imagesArray[index];
    });

    document.getElementById(prevBtnId).addEventListener('click', () => {
        index = (index - 1 + imagesArray.length) % imagesArray.length;
        imgElement.src = imagesArray[index];
    });
}

addEventListeners('currentImage1', 'nextBtn', 'prevBtn', images1, currentImageIndex1);
addEventListeners('currentImage2', 'nextBtn1', 'prevBtn1', images2, currentImageIndex2);
addEventListeners('currentImage3', 'nextBtn2', 'prevBtn2', images3, currentImageIndex3);
