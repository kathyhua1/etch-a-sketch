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
function replaceGrid ("redoGrid") {
    let choice= prompt("What size grid would you like? (enter a number)");
    let gridSize = parseInt(choice, 10);
}