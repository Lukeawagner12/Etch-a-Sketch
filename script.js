// Setup grid wrapper and add squares
let gridWrapper = document.querySelector('.grid-wrapper');
let userInput = getUserInput();
let gridSize = getGridSize(userInput);
setGrid(gridSize, userInput);
// Reset button
let resetBtn = document.querySelector('.reset');
resetBtn.addEventListener('click', function() {
    removeSquares();
    let userInput = getUserInput();
    gridSize = getGridSize(userInput);
    setGrid(gridSize, userInput);
});

// Get user input on reset
function getUserInput() {
    let newGridSize = prompt("Select the grid size you would like to try next");
    return newGridSize
}

// Get grid size
function getGridSize(userInput) {
    let gridSize = userInput * userInput;
    return gridSize;
}

// Set grid
function setGrid(gridSize, userInput) {
    console.log(userInput);
    let squareHightWidth = 100 / userInput;
    for (let i = 0; i < gridSize; i++) {
        const square = document.createElement("div");
        square.setAttribute("class", "grid-square");
        square.style.height = squareHightWidth + "%";
        square.style.width = squareHightWidth + "%";
        square.addEventListener('mouseenter', function() {
            this.classList.add("square-active");
        });
        gridWrapper.appendChild(square);
    }
}

// Remove current squares
function removeSquares() {
    let allSquares = document.querySelectorAll(".grid-square");
    allSquares.forEach(square => {
        square.remove();
    });
}