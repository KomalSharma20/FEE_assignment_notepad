document.addEventListener("DOMContentLoaded", function () {
    const textarea = document.getElementById("textarea");
    const saveButton = document.getElementById("save-button");
    const clearButton = document.getElementById("clear-button");

    // Check if there is saved text in localStorage
    const savedText = localStorage.getItem("notepadText");
    if (savedText) {
        textarea.value = savedText;
    }

    // Save button click event
    saveButton.addEventListener("mouseover", function () {
        const textToSave = textarea.value;
        localStorage.setItem("notepadText", textToSave);
        alert("Text saved!!");
    });

    // Clear button click event
    clearButton.addEventListener("mouseout", function () {
        localStorage.removeItem("notepadText");
        textarea.value = "";
        alert("Text cleared!!");
    });
});