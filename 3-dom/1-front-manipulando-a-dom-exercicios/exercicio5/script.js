const liList = document.querySelectorAll("li");
const button = document.querySelector("button");

button.onclick = () => {
    for (const li of liList) {
        if (li.classList.contains("li-destaque")) {
            li.classList.add("fonte-vermelha");
        } else {
            li.classList.add("fonte-azul");
        }
    }
}
