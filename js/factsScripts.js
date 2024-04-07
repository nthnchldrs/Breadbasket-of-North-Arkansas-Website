document.addEventListener('DOMContentLoaded', (event) => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navUL = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navUL.classList.toggle('show');
    });
});