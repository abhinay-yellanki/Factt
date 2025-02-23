// Wait for the page to fully load
document.addEventListener("DOMContentLoaded", () => {
    
    // Highlight the active navigation link
    const navLinks = document.querySelectorAll("nav a");
    navLinks.forEach(link => {
        link.addEventListener("click", function() {
            navLinks.forEach(nav => nav.classList.remove("active")); // Remove active class from all links
            this.classList.add("active"); // Add active class to clicked link
        });
    });

    // Example: Add a button to show an alert message
    const section = document.querySelector("section"); // Find the section element
    const button = document.createElement("button"); // Create a new button
    button.textContent = "Click Me!";
    button.style.padding = "10px 20px";
    button.style.fontSize = "16px";
    button.style.marginTop = "20px";
    
    // Add click event to the button
    button.addEventListener("click", () => {
        alert("Welcome to My Business Website!");
    });

    // Append button to the section
    section.appendChild(button);
});
