
const container = document.querySelectorAll(".container")[0];
createGrid(16);

function createGrid(size) {

    //Remove all children of container, when needed
    while (container.firstChild) {
        container.removeChild(container.lastChild);
    }

    let width = container.clientWidth / size;
    console.log(width);

    for(let i = 1; i <= size; i++) {
        for(let j = 1; j <= size; j++) {
            const square = document.createElement("div");
            square.className = "square";
            square.style.width = .99*width + "px";
            square.style.height = .99*width + "px";

            square.addEventListener("mouseover", changeColor)

            container.appendChild(square);
        }
    }
}

function changeColor(e) {
    const square = e.target;

    //Randomize rgb values
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    square.style.backgroundColor = "rgb("+r+","+g+","+b+")";

    // Change opacity of square
    let currentOpacity = parseFloat(square.style.opacity) || 0;
    if (currentOpacity < 1) {
        square.style.opacity = currentOpacity + 0.1;
    }
}

const btn = document.querySelectorAll(".change-size")[0];

btn.addEventListener("click", () => {

    let size = 0;

    do {
        size = parseInt(prompt("Choose a grid size (must be 100 or less)"));
        console.log(typeof size)
        console.log((size));
    }
    while(isNaN(size) || size == 0 || size > 100)
        

    createGrid(size);
});