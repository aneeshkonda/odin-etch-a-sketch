const container = document.querySelector(".container")

function standard() {
    for (let i = 0; i < 256; i++) {
        const gridDiv = document.createElement("div")
        gridDiv.classList.add("gridbox")
        gridDiv.style.width = String(36/16) + "rem"
        gridDiv.style.height = String(36/16) + "rem"
        container.appendChild(gridDiv)
    }
    const squares = document.querySelectorAll(".gridbox")
    squares.forEach(function(square) {
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = 'black'
        });
        square.addEventListener('mousedown', function() {
            square.style.backgroundColor = 'black'
        });
    });
}

function promptMe() {
    const temps = document.querySelectorAll(".gridbox")
    temps.forEach(function(temp) {
        container.removeChild(temp);
    });
    // reset()

    let gridSize = prompt("Please provide grid size");
    for (let i = 0; i < (gridSize*gridSize); i++) {
        const gridDiv = document.createElement("div")
        gridDiv.classList.add("gridbox")
        gridDiv.style.width = String(36/gridSize) + "rem"
        gridDiv.style.height = String(36/gridSize) + "rem"
        container.appendChild(gridDiv)
    }
    
    const squares = document.querySelectorAll(".gridbox")
    squares.forEach(function(square) {
        square.addEventListener('mouseover', function() {
            square.style.backgroundColor = 'black'
        });
    });
}

function reset() {
    const temps = document.querySelectorAll(".gridbox")
    temps.forEach(function(temp) {
        container.removeChild(temp);
    });
    standard()
}

standard()