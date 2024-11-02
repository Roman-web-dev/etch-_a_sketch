const container = document.querySelector("#container")
const button = document.querySelector("#btn")
const numInput = document.querySelector("#numInput")

function changeColor (e) {
    let color = e.target.style.backgroundColor
    if (e.type === "mouseover") {
        e.target.style.backgroundColor = "blue"
    } else {
        e.target.style.backgroundColor = "brown"   
    }
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
    }
    const cells = document.querySelectorAll(".cell")    
}



let squaresNumber = 16

button.addEventListener("click", () => {
    squaresNumber = parseInt(numInput.value)
    if (squaresNumber > 100) {
        alert("Must be less than 100")
    }else createGrid()
})



createGrid()
