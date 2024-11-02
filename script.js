const container = document.querySelector("#container")
const button = document.querySelector("#btn")
const numInput = document.querySelector("#numInput")

function changeColor (e) {
    let color = e.target.style.backgroundColor
    if (e.type === "mouseover") {
        e.target.dataset.Color = color(value)
        e.target.style.backgroundColor = "blue"
    } else {
        e.target.style.backgroundColor = e.target.dataset.Color
        let opacity = parseFloat(getComputedStyle(e.target).opacity)
        opacity -= 0.2
        e.target.style.opacity = opacity
    }
}

function randomRGB() {
    const minCeiled = Math.ceil(1);
    const maxFloored = Math.floor(255);
    return Math.floor(Math.random() * (maxFloored - minCeiled) + minCeiled);
}
function createGrid () {
    container.innerHTML = "";

    let cellWidth = 100 / squaresNumber    // Adaptive cell width depending on number of squares

    let squredNumber = squaresNumber * squaresNumber

    for(let i = 0; i < squredNumber; i++) {
        const newCell = document.createElement("div")
        newCell.classList.add("cell")
        container.appendChild(newCell)
        newCell.addEventListener("mouseover", changeColor )
        newCell.addEventListener("mouseout", changeColor )
        newCell.style.flex = `1 1 ${cellWidth}%`
        newCell.style.backgroundColor = `rgb(${randomRGB()} ${randomRGB()} ${randomRGB()})`
    }
    const cells = document.querySelectorAll(".cell")    
}



let squaresNumber = 16

button.addEventListener("click", () => {
    squaresNumber = parseInt(numInput.value)
    if (squaresNumber > 100) {
        alert("Max size 100")
    }else createGrid()
})



createGrid()
