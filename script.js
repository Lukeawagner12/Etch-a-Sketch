// Setup grid wrapper and add squares
let gridWrapper = document.querySelector('.grid-wrapper');
let header = document.querySelector('.header');
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
    let newGridSize = prompt("Enter size of canvas (example: 55), max is 100.");
    if (newGridSize > 100) {
        newGridSize = prompt("Over max limit of 100. Please try again.");
        console.log("Entered over 100, reduced to 100");
    }
    return newGridSize
}

// Get grid size
function getGridSize(userInput) {
    let gridSize = userInput * userInput;
    return gridSize;
}

// Set grid
function setGrid(gridSize, userInput) {
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
    removeLabel();
    let gridSizeLabel = document.createElement("p");
    gridSizeLabel.setAttribute("class", "label");
    let labelText = document.createTextNode("Current grid size is:" + userInput + "x" + userInput);
    gridSizeLabel.appendChild(labelText);
    header.appendChild(gridSizeLabel);
}

//removeLabel
function removeLabel() {
    let label = document.querySelector('.label');
    if(label){
        label.remove();
    } 
}

// Remove current squares
function removeSquares() {
    let allSquares = document.querySelectorAll(".grid-square");
    allSquares.forEach(square => {
        square.remove();
    });
}