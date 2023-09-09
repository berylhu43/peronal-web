let images = ["path_to_image_1.jpg", "path_to_image_2.jpg", ...]; // Add paths to all your images here
let currentImageIndex = 0;

document.querySelector('.next').addEventListener('click', function() {
    currentImageIndex++;
    if (currentImageIndex >= images.length) {
        currentImageIndex = 0;  // loop back to the start
    }
    updateImage();
});

document.querySelector('.prev').addEventListener('click', function() {
    currentImageIndex--;
    if (currentImageIndex < 0) {
        currentImageIndex = images.length - 1;  // loop back to the end
    }
    updateImage();
});

function updateImage() {
    document.getElementById('currentImage').src = images[currentImageIndex];
}
