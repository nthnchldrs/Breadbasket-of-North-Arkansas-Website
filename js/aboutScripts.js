document.addEventListener('DOMContentLoaded', (event) => {
     // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navUL = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navUL.classList.toggle('show');
    });

    const contactForm = document.getElementById('contact-form'); // Replace 'contact-form-id' with your actual form ID
    contactForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission
        openModal('confirmationModal'); // Show the confirmation modal

        contactForm.reset(); // Reset the form after submission

        // Here, you could also include AJAX to submit the form data asynchronously
        // and then reset the form for future submissions if necessary
    });
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}