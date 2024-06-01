let slideIndex = 0;

function showSlides() {
    let slides = document.querySelectorAll('.slide');
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = 'none';
    }
    slideIndex++;
    if (slideIndex > slides.length) {
        slideIndex = 1;
    }
    slides[slideIndex - 1].style.display = 'block';
    setTimeout(showSlides, 7000);
}

function moveSlide(n) {
    slideIndex += n - 1;
    showSlides();
}

document.addEventListener('DOMContentLoaded', showSlides);
