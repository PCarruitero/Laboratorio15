const p = document.querySelector("p");
if (p) {
    const div = document.createElement("div");
    div.textContent = "Parrafo reemplazado";
    p.replaceWith(div);
}