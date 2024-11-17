// Step 1: Declaring variables for the input, button, and list elements.
const input = document.querySelector('#favchap');   // Input element for chapter title
const button = document.querySelector('button');     // Button for adding a chapter
const list = document.querySelector('#list');         // Unordered list to display chapters

// Step 2: Event listener for button clicks
button.addEventListener('click', function () {
    // Step 2a: Check if the input is not blank
    if (input.value.trim() === '') {
        // Provide feedback or do nothing and focus back on the input
        input.focus(); // sets focus back to the input
        return; // exit from the function if input is blank
    }
    
    // Create a li element that will hold each entry's chapter title and delete button
    const li = document.createElement('li');

    // Step 3: Create a delete button
    const deleteButton = document.createElement('button');

    // Populate the li element's textContent with the input value
    li.textContent = input.value;

    // Populate the delete button textContent with a ❌
    deleteButton.textContent = '❌';
    
    // Optional: Add aria-label to delete button for accessibility
    deleteButton.setAttribute('aria-label', `Remove ${input.value}`);

    // Step 6: Append the delete button to the li element
    li.appendChild(deleteButton);
    
    // Step 7: Append the li element to the unordered list
    list.appendChild(li);

    // Clear the input after adding
    input.value = '';

    // Regardless if a list item was created or not, focus back on the input element
    input.focus();

    // Step 4: Add an event listener to the delete button that removes the li element when clicked
    deleteButton.addEventListener('click', function() {
        list.removeChild(li);
    });
});