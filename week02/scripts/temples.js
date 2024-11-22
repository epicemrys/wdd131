document.addEventListener('DOMContentLoaded', function() {
    // Update the copyright year in the footer
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Set last modified date
    const lastModifiedDate = new Date(document.lastModified);
    // Format the date as needed, 'MM/DD/YYYY'
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('last-modified').textContent = lastModifiedDate.toLocaleDateString(undefined, options);

    // Hamburger menu toggle functionality
    const hamburgerButton = document.getElementById('hamburger-button');
    const navMenu = document.getElementById('nav-menu');
    
    hamburgerButton.addEventListener('click', function() {
        navMenu.style.display = (navMenu.style.display === "block") ? "none" : "block";
    });
});