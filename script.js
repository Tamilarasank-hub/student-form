
// Select the HTML elements
var message = document.getElementById("message");
var counter = document.getElementById("counter");
var warning = document.getElementById("warning");

// Set the maximum character limit
var maxLength = 200;

// Add an input event listener
message.addEventListener("input", function () {

    // Get the number of characters typed
    var typedCharacters = message.value.length;

    // Calculate remaining characters
    var remainingCharacters = maxLength - typedCharacters;

    // Update the character counter
    counter.textContent = typedCharacters + "/" + maxLength +
        " characters | " + remainingCharacters + " remaining";

    // Display a warning message
    if (typedCharacters === maxLength) {
        warning.textContent = "Warning: You have reached the character limit!";
    } else {
        warning.textContent = "";
    }

});