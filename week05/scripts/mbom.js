// The select elements
const input = document.getElementById("favchap");
const button = document.getElementById("add-chapter");
const list = document.getElementById("list");

// Declare an array to hold chapters, from localStorage
let chaptersArray = getChapterList() || [];

// Populate the displayed list of chapters on load
chaptersArray.forEach(chapter => {
    displayList(chapter);
});

// Function to display a chapter in the list and handle deleting
function displayList(item) {
    let li = document.createElement('li');
    let deleteButton = document.createElement('button');
    
    li.textContent = item; // Display the chapter
    deleteButton.textContent = '❌';
    deleteButton.classList.add('delete');
    
    // ppend button to the list item
    li.append(deleteButton);
    list.append(li);
    

    deleteButton.addEventListener('click', function () {
        list.removeChild(li);
        deleteChapter(li.textContent); // Call the delete function
        input.focus(); // Focus back to input
    });
}

// Button click event listener
button.addEventListener('click', () => {
    if (input.value.trim() !== '') {  // Check for non-empty input
        displayList(input.value); // Display entered chapter
        chaptersArray.push(input.value); // Add it to the array
        setChapterList(); // Save up
        input.value = ''; // Clear input field
        input.focus();
    } else {
        alert("Please enter a Book and Chapter."); // Alert for empty input
    }
});

// function to save chapters to localStorage
function setChapterList() {
    localStorage.setItem('myFavBOMList', JSON.stringify(chaptersArray));
}

// Function to get chapters from localStorage
function getChapterList() {
    return JSON.parse(localStorage.getItem('myFavBOMList'));
}

// Function to delete a chapter
function deleteChapter(chapter) {
    chapter = chapter.slice(0, chapter.length - 1); // Remove the delete button symbol
    chaptersArray = chaptersArray.filter(item => item !== chapter); // Filter out deleted chapter
    setChapterList(); // Update localStorage
}