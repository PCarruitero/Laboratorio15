const colores = ["red", "blue", "green"];
const divs = document.querySelectorAll("div");
let i = 0;
divs.forEach(div => {
    div.style.backgroundColor = colores[i];
    i++;
})