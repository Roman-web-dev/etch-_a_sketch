const container = document.querySelector("#container")

function changeColor (e) {
    let color = e.target.style.backgroundColor
    if (e.type === "mouseover") {
        e.target.style.backgroundColor = "blue"
    } else {
        e.target.style.backgroundColor = "brown"   
    }
}

let squresNumber = 16
let cellWidth = (960 / squresNumber) / 960 * 100    // Adaptive cell width depending on number of squares

let squredNumber = squresNumber * squresNumber

for(let i = 0; i < squredNumber; i++) {
    const newCell = document.createElement("div")
    newCell.classList.toggle("cell")
    container.appendChild(newCell)
}

const cells = document.querySelectorAll(".cell")


cells.forEach((cell) => {
    cell.addEventListener("mouseover", changeColor )
    cell.addEventListener("mouseout", changeColor )
    cell.style.flex = `1 1 ${cellWidth}%`
})


