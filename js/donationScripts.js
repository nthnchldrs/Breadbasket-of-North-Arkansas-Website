document.addEventListener('DOMContentLoaded', (event) => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navUL = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navUL.classList.toggle('show');
    });

    const paymentForm = document.getElementById('donation-form');
    const donateButton = document.getElementById('donateButton');

    // Initially disable the donate button until form fields are filled
    donateButton.disabled = !paymentForm.checkValidity();

    // Add event listener to the payment form for any input changes
    paymentForm.addEventListener('input', () => {
        // Enable the donate button only if all form fields are valid
        donateButton.disabled = !paymentForm.checkValidity();
    });

    // When the user clicks the button, open the modal 
    document.getElementById('donate-now-button').onclick = function() {
        openModal('paymentModal');
    };

    // When the form is submitted, show the thank you modal
    document.getElementById('donateButton').onclick = function(event) {
        event.preventDefault();
        closeModal('paymentModal');
        openModal('thankYouModal');
    };
});

function openModal(modalId) {
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = "none";
}