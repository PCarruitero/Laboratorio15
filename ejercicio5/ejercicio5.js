const ul = document.getElementById("Lista1");
if (ul) {
    for (const li of ul.children) {
        console.log(li.textContent);
    }
}