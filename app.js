const color = document.getElementById("color");
const change = document.getElementById("change");
const reset = document.getElementById("reset");

change.addEventListener("click", () => {
    let newColor = getRandomColor();
    color.innerText = newColor;
    document.body.style.background = newColor;
});

reset.addEventListener("click", () => {
    color.innerText = "#FFFFFF";
    document.body.style.background = "#FFFFFF";
});

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let nColor = "#"
    for (let i = 0; i < 6; i++) {
        nColor += letters[Math.floor(Math.random() * 16)];
    }
    return nColor;
}