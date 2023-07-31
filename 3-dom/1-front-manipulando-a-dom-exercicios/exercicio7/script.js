const allBoxes = document.getElementsByClassName("box");
const redBox = document.querySelector(".red");
const blueBox = document.querySelector(".blue");
const purpleBox = document.querySelector(".purple");
const orangeBox = document.querySelector(".orange");
const button = document.querySelector("button");
const h2Result = document.querySelector(".h2-result");

const unselectBoxes = () => {
    for (let box of allBoxes) {
        box.classList.remove("selected")
    }

}

redBox.onclick = () => {
    unselectBoxes();
    redBox.classList.add("selected");
}

blueBox.onclick = () => {
    unselectBoxes();
    blueBox.classList.add("selected");
}

purpleBox.onclick = () => {
    unselectBoxes();
    purpleBox.classList.add("selected");
}

orangeBox.onclick = () => {
    unselectBoxes();
    orangeBox.classList.add("selected");
}

const handleSelection = () => {
    let index = -1;

    for (let i = 0; i < allBoxes.length; i++) {
        if (allBoxes[i].classList.contains("selected")) {
            index = i;
        }
    }
    return index
}

button.onclick = () => {
    const aleatoryPosition =  Math.floor(Math.random() * 4);
    handleSelection();

    if (handleSelection() === -1) {
        h2Result.textContent = "Selecione uma cor para sortear!"
    } else if (aleatoryPosition === handleSelection()) {
        h2Result.textContent = "Parabéns, você acertou!"
    } else {
        h2Result.textContent = "Tente novamente!"
    }
}
