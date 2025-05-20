
const lightBluePalette = [
    '#E0F7FA', '#B3E5FC', '#81D4FA', '#4FC3F7', '#29B6F6', 
    '#03A9F4', '#B2EBF2', '#A7FFEB', '#80DEEA', '#64B5F6', 
    '#90CAF9', '#BBDEFB', '#E3F2FD', '#D0F0FD', '#C0E8F9','#B0D9F6' 
];

const pinkPalette = ['#F8BBD0','#F48FB1','#F06292','#EC407A','#FFCDD2',
    '#F28BAF','#FFB6C1','#FFA6BA','#FF94A9','#FF8DA1','#E57399','#D81B60','#C2185B'];

const grid = document.querySelector(".grid");
const gridSize = 640;

function getRandomColor(palette) {
  const index = Math.floor(Math.random() * palette.length);
  return palette[index];
}
function createGrid (size) {

    // remove all squares from grid
    grid.innerHTML = "";

    // create a new grid
    for (let i=0; i<size*size; i++) {
        const div = document.createElement("div");
        div.classList.add("grid-square");
        grid.appendChild(div);
        
        div.style.background = getRandomColor(pinkPalette);
        div.style.width = gridSize/size + "px";
        div.style.height = gridSize/size + "px";
        div.addEventListener("mouseover", () => {
            div.style.background = "black";
        })
    }
}

// automatically start with a 16x16 grid
createGrid(16);

const button8 = document.querySelector(".size8");
const button16 = document.querySelector(".size16");
const button32 = document.querySelector(".size32");

button8.addEventListener("click", ()=> createGrid(8));
button16.addEventListener("click", ()=> createGrid(16));
button32.addEventListener("click", ()=> createGrid(32));
