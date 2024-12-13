document.addEventListener('DOMContentLoaded', function() {
    // Set current year
    const currentYear = new Date().getFullYear();
    document.getElementById('current-year').textContent = currentYear;

    // Set last modified date
    const lastModifiedDate = new Date(document.lastModified);
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    document.getElementById('last-modified').textContent = lastModifiedDate.toLocaleDateString(undefined, options);

    // Array of Temple Objects
    const temples = [
        {
            templeName: "Aba Nigeria",
            location: "Aba, Nigeria",
            dedicated: "2005, August, 7",
            area: 11500,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
        },
        {
            templeName: "Manti Utah",
            location: "Manti, Utah, United States",
            dedicated: "1888, May, 21",
            area: 74792,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
        },
        {
            templeName: "Payson Utah",
            location: "Payson, Utah, United States",
            dedicated: "2015, June, 7",
            area: 96630,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
        },
        {
            templeName: "Yigo Guam",
            location: "Yigo, Guam",
            dedicated: "2020, May, 2",
            area: 6861,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
        },
        {
            templeName: "Washington D.C.",
            location: "Kensington, Maryland, United States",
            dedicated: "1974, November, 19",
            area: 156558,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
        },
        {
            templeName: "Lima Perú",
            location: "Lima, Perú",
            dedicated: "1986, January, 10",
            area: 9600,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
        },
        {
            templeName: "Mexico City Mexico",
            location: "Mexico City, Mexico",
            dedicated: "1983, December, 2",
            area: 116642,
            imageUrl: "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
        },
        {
            templeName: "Salt Lake City",
            location: "Salt Lake City, Utah, United States",
            dedicated: "1893, April, 6",
            area: 382207,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/salt-lake-temple/salt-lake-temple-15669-main.jpg"
        },
        {
            templeName: "Los Angeles California",
            location: "Los Angeles, California, United States",
            dedicated: "1956, March, 11",
            area: 190614,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/los-angeles-california-temple/los-angeles-california-temple-49533.jpg"
        },
        {
            templeName: "Phoenix Arizona",
            location: "Phoenix, Arizona, United States",
            dedicated: "2014, December, 14",
            area: 64870,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/phoenix-arizona-temple/phoenix-arizona-temple-12711-main.jpg"
        },
        {
            templeName: "Orlando Florida",
            location: "Orlando, Florida, United States",
            dedicated: "1994, October, 9",
            area: 70000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/orlando-florida-temple/orlando-florida-temple-51569.jpg"
        },
        {
            templeName: "Accra Ghana Temple",
            location: "Accra Ghana",
            dedicated: "2004, January, 11",
            area: 17500,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/accra-ghana-temple/accra-ghana-temple-13760-main.jpg"
        },
        {
            templeName: "Brasília Brazil",
            location: "Brazil",
            dedicated: "2003, September, 17",
            area: 25000,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/brasilia-brazil-temple/brasilia-brazil-temple-39184-main.jpg"
        },
        {
            templeName: "Chicago Illinois",
            location: "Illinis United States",
            dedicated: "1985, August, 9",
            area: 37062,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/chicago-illinois-temple/chicago-illinois-temple-27308-main.jpg"
        },
        {
            templeName: "Seoul Korea",
            location: "Seoul, Seoul-teukbyeolsi South Korea",
            dedicated: "1985, December, 14",
            area: 28057,
            imageUrl: "https://churchofjesuschristtemples.org/assets/img/temples/seoul-korea-temple/seoul-korea-temple-22305-main.jpg"
        },
    ];

    // Function to render temples based on filter
    function renderTemples(filteredTemples) {
        const templeGrid = document.getElementById('temple-grid');
        templeGrid.innerHTML = ''; // Clear existing temples

        filteredTemples.forEach(temple => {
            const templeCard = document.createElement('div');
            templeCard.classList.add('grid-item');
            templeCard.innerHTML = `
                <img src="${temple.imageUrl}" alt="${temple.templeName}" loading="lazy">
                <p><strong>${temple.templeName}</strong></p>
                <p>${temple.location}</p>
                <p>Dedicated: ${temple.dedicated}</p>
                <p>Area: ${temple.area} sq ft</p>
            `;
            templeGrid.appendChild(templeCard);
        });
    }

    // Filter temples based on selection
    const filterTemples = (criteria) => {
        let filteredTemples;
        const currentYear = new Date().getFullYear();

        switch (criteria) {
            case 'old':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() < 1900);
                break;
            case 'new':
                filteredTemples = temples.filter(temple => new Date(temple.dedicated).getFullYear() > 2000);
                break;
            case 'large':
                filteredTemples = temples.filter(temple => temple.area > 90000);
                break;
            case 'small':
                filteredTemples = temples.filter(temple => temple.area < 10000);
                break;
            case 'all':
            default:
                filteredTemples = temples;
        }

        renderTemples(filteredTemples);
    };

    // Initially render all temples
    renderTemples(temples);

    // Navigation menu item click event
    const navLinks = document.querySelectorAll('#nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Prevent default anchor behavior
            const filterType = link.getAttribute('data-filter');
            filterTemples(filterType); // Call the filter function
            // Optionally, deactivate other links
            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active'); // Highlight the selected filter
        });
    });

    // Hamburger menu toggle functionality
    const hamburgerButton = document.getElementById('hamburger-button');
    hamburgerButton.addEventListener('click', function() {
        const navMenu = document.getElementById('nav-links');
        navMenu.classList.toggle('active');

        // Toggle the hamburger button between '☰' and '✖'
        if (navMenu.classList.contains('active')) {
            hamburgerButton.innerHTML = '✖'; // Change to 'X' when menu is open
        } else {
            hamburgerButton.innerHTML = '&#9776;'; // Change back to hamburger icon when menu is closed
        }
    });
});