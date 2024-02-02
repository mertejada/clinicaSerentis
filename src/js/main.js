document.addEventListener("DOMContentLoaded", function () {
    const carousel = document.querySelector('.rrss-carousel');
    const slides = document.querySelectorAll('.rrss-slide');
    const prevBtn = document.querySelector('.prev');
    const nextBtn = document.querySelector('.next');

    let currentIndex = 0;
    const totalSlides = slides.length;
    const slideWidth = slides[0].offsetWidth;

    prevBtn.addEventListener('click', () => {
        if (currentIndex > 0) {
            currentIndex--;
            updateCarousel();
        }
    });

    nextBtn.addEventListener('click', () => {
        if (currentIndex < totalSlides - 1) {
            currentIndex++;
            updateCarousel();
        }
    });

    function updateCarousel() {
        const offset = -currentIndex * slideWidth;
        carousel.style.transform = `translateX(${offset}px)`;
    }
});


