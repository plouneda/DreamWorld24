// JavaScript code
document.addEventListener("DOMContentLoaded", function () {
  // Add event listener for form submission
  const form = document.getElementById("dream-form");
  form.addEventListener("submit", function (event) {
    event.preventDefault(); // Prevent form submission
    // Retrieve dream details from form fields
    const dreamTitle = document.getElementById("dream-title").value;
    // Add further processing logic here (e.g., sending data to server, validation)
    // Display confirmation message or handle errors accordingly
    alert(`Dream "${dreamTitle}" created successfully!`);
  });
});