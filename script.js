const container = document.querySelector("#container")


for(let i = 0; i < 256; i++) {
    const cell = document.createElement("div")
    // cell.textContent = "Cell"
    cell.classList.toggle("cell")
    container.appendChild(cell)
}