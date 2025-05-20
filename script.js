
// create grid

const container = document.querySelector(".container");

for (let i=0; i<16*16; i++) {
    const div = document.createElement("div");
    div.classList.add("grid");
    container.appendChild(div);

    div.style.background = '#' + Math.floor(Math.random()*16777215).toString(16);
}
