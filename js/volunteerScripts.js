document.addEventListener('DOMContentLoaded', (event) => {
    // Hamburger menu toggle
    const hamburger = document.querySelector('.hamburger-menu');
    const navUL = document.querySelector('nav ul');

    hamburger.addEventListener('click', () => {
        navUL.classList.toggle('show');
    });


   const volunteerForm = document.getElementById('volunteer-interest-form');
    
        volunteerForm.addEventListener('submit', function(event) {
            event.preventDefault(); // This will prevent the default form submission
            closeModal('volunteerFormModal');
            openModal('thankYouModal');
        });
    
    // If you have a separate button for opening the form modal, make sure its ID is correct.
    const volunteerNowButton = document.getElementById('volunteer-now-button');
        if (volunteerNowButton) {
            volunteerNowButton.addEventListener('click', function() {
            openModal('volunteerFormModal');
        });
    }
});

function openModal(modalId) {
    console.log("Opening modal:", modalId);
    document.getElementById(modalId).style.display = "block";
}

function closeModal(modalId) {
    console.log("Closing modal:", modalId);
    document.getElementById(modalId).style.display = "none";
}