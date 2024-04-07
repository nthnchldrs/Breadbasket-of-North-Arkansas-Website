document.addEventListener('DOMContentLoaded', (event) => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navUL = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navUL.classList.toggle('show');
    });

    // Carousel functionality
    let slideIndex = 0; // Start with the first slide
    showSlides(slideIndex);

    // Next/previous controls
    window.moveSlide = function(n) {
        showSlides(slideIndex += n);
    }

    function showSlides(n) {
        let i;
        const slides = document.getElementsByClassName("slide");
        
        if (n >= slides.length) slideIndex = 0; // Go back to the first slide
        if (n < 0) slideIndex = slides.length - 1; // Go to the last slide
        
        for (i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";  
        }
        
        slides[slideIndex].style.display = "block";
    }
});