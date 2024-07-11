let gridSize = prompt("Choose your grid size", "16");


const container = document.querySelector("section");
let widthDiv = container.clientWidth / +gridSize;
let heightDiv = container.clientHeight / +gridSize;
let opacity = 0;


    for (i = 0; i < (gridSize * gridSize); i++) { 
        const div = document.createElement("div");
        div.classList.add("div");
        div.style.height = heightDiv + "px";
        div.style.width = widthDiv + "px" ;
        div.style.opacity = 0;
        
        div.addEventListener('mouseover', function() {
            const currentOpacity = parseFloat(this.style.opacity);
            const newOpacity = Math.min(currentOpacity + 0.05, 1); // Clamp to 1 (max)
            this.style.opacity = newOpacity;
        });

        container.appendChild(div);
    }




