document.addEventListener("DOMContentLoaded", function() {
    const rectangles = document.querySelectorAll('.rectangle');

    rectangles.forEach(function(rectangle) {
        rectangle.addEventListener('click', function() {
            // Add the clicked class
            rectangle.classList.toggle('rectangle-clicked');

            // Remove the clicked class after a short delay
            setTimeout(() => {
                rectangle.classList.remove('rectangle-clicked');
            }, 100);  // This delay matches the transition time defined in CSS

            const targetPage = rectangle.getAttribute('data-href');
            if (targetPage) {
                window.location.href = targetPage; 
            }
        });
    });
});



document.addEventListener('DOMContentLoaded', function() {
    imageWrappers = document.querySelectorAll('.img-wrapper');
    const overlay = document.querySelector('.overlay');
    console.log("Number of .img-wrapper elements:", imageWrappers.length);

    imageWrappers.forEach((wrapper, index) => {
        wrapper.addEventListener('click', function() {
            if (this.classList.contains('enlarged')) {
                this.classList.remove('enlarged');
                overlay.style.display = 'none';
                removeNavigationButtons();
            } else {
                imageWrappers.forEach(otherWrapper => otherWrapper.classList.remove('enlarged'));
                this.classList.add('enlarged');
                overlay.style.display = 'block';
                addNavigationButtons(this, index);
            }
        });
    });
});

function addNavigationButtons(currentWrapper, currentIndex) {
    removeNavigationButtons(); // Remove any existing navigation buttons first

    const prevButton = document.createElement('button');
    prevButton.innerText = '<';
    prevButton.className = 'nav-button prev';
    prevButton.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
        const prevIndex = (currentIndex - 1 + imageWrappers.length) % imageWrappers.length;
        imageWrappers[currentIndex].classList.remove('enlarged');
        imageWrappers[prevIndex].classList.add('enlarged');
        addNavigationButtons(imageWrappers[prevIndex], prevIndex);
    });

    const nextButton = document.createElement('button');
    nextButton.innerText = '>';
    nextButton.className = 'nav-button next';
    nextButton.addEventListener('click', function(e) {
        e.stopPropagation();
        const nextIndex = (currentIndex + 1) % imageWrappers.length;
        imageWrappers[currentIndex].classList.remove('enlarged');
        imageWrappers[nextIndex].classList.add('enlarged');
        addNavigationButtons(imageWrappers[nextIndex], nextIndex);
    });

    // Append buttons to the body
    document.body.appendChild(prevButton);
    document.body.appendChild(nextButton);
}

function removeNavigationButtons() {
    const prevButton = document.querySelector('.nav-button.prev');
    const nextButton = document.querySelector('.nav-button.next');

    if (prevButton) prevButton.remove();
    if (nextButton) nextButton.remove();
}
