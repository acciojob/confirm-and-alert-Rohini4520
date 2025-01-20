//your JS code here. If required.
// Get the button element
const button = document.getElementById("proceedButton");

// Add a click event listener to the button
button.addEventListener("click", () => {
    // Show the confirmation dialog
    if (confirm("Do you want to proceed?")) {
        // If OK is clicked
        alert("You clicked OK. Proceeding...");
    } else {
        // If Cancel is clicked
        alert("You clicked Cancel. Exiting...");
    }
});
