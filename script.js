// script.js
document.addEventListener("DOMContentLoaded", function() {
    const gridContainer = document.getElementById("grid-container");

    // Create the 16x16 grid
    for (let i = 0; i < 16 * 16; i++) {
        const square = document.createElement("div");
        square.classList.add("square");

        // Add hover effect to change color
        square.addEventListener("mouseover", () => {
            square.style.backgroundColor = "#2ecc71"; // Change color on hover
        });

        gridContainer.appendChild(square);
    }
});

//Replace the grid button - redoGrid 
function redoGrid() {
    let choice= prompt("What size grid would you like? (enter a number)");
    let gridSize = parseInt(choice, 10);

   if (!isNaN(gridSize) && gridSize > 0) { // Ensure input is a valid positive number
        console.log(`Creating a grid of size ${gridSize}x${gridSize}`);
        // Assuming gridContainer is a defined DOM element:
        createGrid(gridContainer, gridSize, gridSize); // Call a function to create the grid
        return gridContainer; // Return the updated grid container
    } else {
        alert("Please enter a valid positive number.");
        return null; // Return null if input is invalid
    }
}