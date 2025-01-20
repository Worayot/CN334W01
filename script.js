// Select the title and button elements
const title = document.getElementById("main-title");
const button = document.getElementById("changeColorBtn");

// Add an event listener to the button
button.addEventListener("click", () => {
    // Change the title's color to a random color
    title.style.color = getRandomColor();
});

// Function to generate a random color
function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
