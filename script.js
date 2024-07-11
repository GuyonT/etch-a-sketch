let slider = document.getElementById("gridRange");
let output = document.getElementById("value")
output.innerHTML = slider.value;


const gridContainer = document.querySelector("section");

function makeGrid(size) {

    gridContainer.innerHTML = '';
let widthDiv = gridContainer.clientWidth / +size;
let heightDiv = gridContainer.clientHeight / +size;


    for (i = 0; i < (size * size); i++) { 
        const div = document.createElement("div");
        div.classList.add("div");
        div.style.height = heightDiv + "px";
        div.style.width = widthDiv + "px" ;
        div.style.opacity = 0;

        div.addEventListener('mouseover', function() {
            const currentOpacity = parseFloat(this.style.opacity);
            const newOpacity = Math.min(currentOpacity + 0.05, 1); // goes up to 1 (max)
            this.style.opacity = newOpacity;
        });

        container.appendChild(div);
    }
}

//display the value of the slider
slider.oninput = function () {
    output.innerHTML = this.value;  
}

//generate a new grid when the mouse is released on a value
slider.onmouseup = function () {
    let size = this.value;
    makeGrid(size);
}



