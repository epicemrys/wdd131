// When the document is ready
document.addEventListener('DOMContentLoaded', () => {
    // Check localStorage for first-time user
    if (!localStorage.getItem('visited')) {
        alert("Welcome to Giverneur! Thank you for visiting.");
        localStorage.setItem('visited', 'true');
    }

    // Donation form handlings
    const donationForm = document.getElementById('donation-form');
    if (donationForm) {
        donationForm.addEventListener('submit', function (event) {
            event.preventDefault(); // Prevent default form submission

            // We get form values
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const amount = document.getElementById('amount').value;
            const frequency = document.getElementById('frequency').value;

            // Basic form validation
            if (name === '' || email === '' || amount <= 0) {
                alert("Please fill out all fields correctly.");
                return;
            }

            // Process donation (e.g., display a thank you message)
            alert(`Thank you, ${name}! You have donated $${amount} as a ${frequency} contribution.`);

            // Store donation information in localStorage (optional for this project)
            localStorage.setItem('lastDonationName', name);
            localStorage.setItem('lastDonationAmount', amount);
            localStorage.setItem('lastDonationFrequency', frequency);

            // Optionally clear the form
            donationForm.reset();
        });
    }

    // Handle Accordion functionality on the About page
    const accordionItems = document.querySelectorAll('.accordion .item h3');
    accordionItems.forEach(item => {
        item.addEventListener('click', () => {
            const content = item.nextElementSibling;
            // Toggle visibility
            if (content.style.display === 'block') {
                content.style.display = 'none';
            } else {
                content.style.display = 'block';
            }
        });
    });
});