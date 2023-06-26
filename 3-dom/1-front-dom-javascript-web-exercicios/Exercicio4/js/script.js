const myTitle = document.querySelector(".meu-titulo");
const myButton = document.querySelector(".meu-botao");

myButton.onclick = () => {
    myTitle.style.color = myTitle.style.color === "red" ? "blue" : "red";
};
