// place.js

// These function displays the current year
function displayCurrentYear() {
    const yearElement = document.getElementById('currentyear'); // Select the span element for the current year
    const currentYear = new Date().getFullYear(); // Get the current year
    yearElement.textContent = currentYear; // Set the text content of the span to the current year
}

// Display the last modified date of the document
function displayLastModifiedDate() {
    const lastModifiedElement = document.getElementById('lastModified'); // Select the paragraph for last modified date
    const lastModifiedDate = document.lastModified; // Get the last modified date of the document
    lastModifiedElement.textContent = 'Last modified: ' + lastModifiedDate; // Set the text content to show the last modified date
}

// Invoke the functions when the script loads
displayCurrentYear();
displayLastModifiedDate();