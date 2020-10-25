const button = document.getElementById("button")

const circle = document.getElementById("circle")
const sqaure = document.getElementById("square")
const rectangle = document.getElementById("rectangle")

const box = document.getElementById("box")

let oldValue = 0
let numberInTheShape = 1

button.onclick = () => {

    let n = document.getElementById("number").value;
    n = Number(oldValue) + Number(n)

    for (let j = numberInTheShape; j <= n; j++) {
        var shape = document.createElement("div")
        shape.innerHTML += numberInTheShape;
        if (circle.checked) {
            shape.classList.add("circle")
        } else if (sqaure.checked) {
            shape.classList.add("square")
        } else if (rectangle.checked) {
            shape.classList.add("rectangle")
        }
        box.appendChild(shape);
        numberInTheShape++;
        oldValue = box.lastElementChild.innerHTML

    }
}