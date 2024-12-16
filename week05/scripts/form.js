const products = [
    { id: "fc-1888", name: "flux capacitor", averagerating: 4.5 },
    { id: "fc-2050", name: "power laces", averagerating: 4.7 },
    { id: "fs-1987", name: "time circuits", averagerating: 3.5 },
    { id: "ac-2000", name: "low voltage reactor", averagerating: 3.9 },
    { id: "jj-1969", name: "warp equalizer", averagerating: 5.0 }
];

// Populate Product Name dropdown
const productSelect = document.getElementById('productName');

products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
});

// Create star rating input fields
const ratingStars = document.getElementById('ratingStars');

for (let i = 1; i <= 5; i++) {
    const radioInput = document.createElement('input');
    radioInput.type = 'radio';
    radioInput.id = `rating${i}`;
    radioInput.name = 'overallRating';
    radioInput.value = i;
    radioInput.required = true; // Make sure one radio button is selected

    const label = document.createElement('label');
    label.htmlFor = `rating${i}`;
    label.className = 'rating-label'; // Adding a class for CSS styling
    label.innerHTML = `☆`; // Star character

    // Mouse over effect
    label.addEventListener('mouseover', () => {
        highlightStars(i);
    });

    // Mouse out effect
    label.addEventListener('mouseout', () => {
        highlightStars(getSelectedRating());
    });

    // Click event to select rating
    radioInput.addEventListener('change', () => {
        highlightStars(radioInput.value);
    });

    ratingStars.appendChild(radioInput);
    ratingStars.appendChild(label);
}

// Function to highlight stars based on rating
function highlightStars(rating) {
    const labels = document.querySelectorAll('.rating-label');
    labels.forEach((label, index) => {
        label.style.color = index < rating ? 'gold' : '#ccc'; // Highlight stars based on rating
    });
}

// Function to get the selected rating
function getSelectedRating() {
    const selectedRadio = document.querySelector('input[name="overallRating"]:checked');
    return selectedRadio ? Number(selectedRadio.value) : 0; // Return 0 if none selected
}

// Handle form submission
document.getElementById('reviewForm').addEventListener('submit', function () {
    // Increment review count in localStorage
    let reviewCount = localStorage.getItem('reviewCount');
    reviewCount = reviewCount ? parseInt(reviewCount) + 1 : 1;
    localStorage.setItem('reviewCount', reviewCount);
});

// Set current year and last modified date
document.addEventListener('DOMContentLoaded', function () {
    // Set the current year
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Set the last modified date
    const lastModifiedDate = new Date(document.lastModified);
    const lastModifiedString = lastModifiedDate.toLocaleString(); // Convert to localized string
    document.getElementById('last-modified').textContent = lastModifiedString; // Set to the span
});