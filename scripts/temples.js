document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Set last modified date
    const lastModifiedDate = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('last-modified').textContent = lastModifiedDate.toLocaleDateString(undefined, options);

    // Hamburger menu toggle functionality
    const hamburgerButton = document.getElementById('hamburger-button');
    const navMenu = document.getElementById('nav-links'); // Using 'nav-links'

    hamburgerButton.addEventListener('click', function() {
        // Toggle the 'active' class to show/hide the nav menu
        navMenu.classList.toggle('active');

        // Toggle the hamburger button between '☰' and '✖'
        if (navMenu.classList.contains('active')) {
            hamburgerButton.innerHTML = '✖'; // Change to 'X' when menu is open
        } else {
            hamburgerButton.innerHTML = '&#9776;'; // Change back to hamburger icon when menu is closed
        }
    });
});