const container = document.querySelector("section");
const widthDiv = container.offsetWidth / 16;
const heightDiv = container.offsetHeight / 16;


function createGrid () {
    for (i = 0; i < 256; i++) {
        const div = document.createElement("div");
        div.classList.add("div");
        div.style.height = heightDiv + "px";
        div.style.width = widthDiv + "px" ;
        container.appendChild(div);
    }
}

createGrid();


