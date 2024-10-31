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
squresNumber *= squresNumber



for(let i = 0; i < squresNumber; i++) {
    const newCell = document.createElement("div")
    newCell.classList.toggle("cell")
    container.appendChild(newCell)
}

const cells = document.querySelectorAll(".cell")

cells.forEach((cell) => {
    cell.addEventListener("mouseover", changeColor )
})

cells.forEach((cell) => {
    cell.addEventListener("mouseout", changeColor )
})
