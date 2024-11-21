const notepad = document.getElementById('notepad');
const saveButton = document.getElementById('save-button-notepad');

// Check for saved content in localStorage
const savedContent = localStorage.getItem('notepadContent');
if (savedContent) {
    notepad.value = savedContent;
}

// Save content to localStorage on input
notepad.addEventListener('input', function() {
    localStorage.setItem('notepadContent', notepad.value);
});

// Save button click event
saveButton.addEventListener('click', function() {
    alert('Note saved!'); // You can replace this with your save functionality
});
