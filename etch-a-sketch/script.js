const container = document.getElementById("container");
const resizeButton = document.getElementById("resizeButton");
const eraseButton = document.getElementById("eraseButton");

let eraseMode = false;

function createGrid(size) {
    container.innerHTML = "";

    const squareSize = 500 / size;

    for (let i = 0; i < size * size; i++) {
        const square = document.createElement("div");

        square.classList.add("grid-square");

        square.style.width = squareSize + "px";
        square.style.height = squareSize + "px";

        square.addEventListener("mouseenter", function () {
            if (eraseMode) {
                square.style.backgroundColor = "white";
            } else {
                square.style.backgroundColor = "black";
            }
        });

        container.appendChild(square);
    }
}

createGrid(16);

resizeButton.addEventListener("click", function () {
    let size = prompt("Enter a grid size (maximum 100):");

    size = Number(size);

    if (size >= 1 && size <= 100) {
        createGrid(size);
    } else {
        alert("Please enter a number between 1 and 100.");
    }
});

eraseButton.addEventListener("click", function () {
    eraseMode = !eraseMode;

    if (eraseMode) {
        eraseButton.textContent = "Drawing Mode";
    } else {
        eraseButton.textContent = "Erase";
    }
});