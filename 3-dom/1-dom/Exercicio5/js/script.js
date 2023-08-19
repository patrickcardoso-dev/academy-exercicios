const buttonUnderline = document.querySelector(".btn-underline");
const buttonItalic = document.querySelector(".btn-italic");
const buttonBold = document.querySelector(".btn-bold");
const buttonDecrement = document.querySelector(".btn-decrement-font");
const spamSize = document.querySelector(".current-font-size");
const buttonIncrement = document.querySelector(".btn-increment-font");
const buttonRed = document.querySelector(".btn-red");
const buttonBlue = document.querySelector(".btn-blue");
const buttonPurple = document.querySelector(".btn-purple");
const buttonBlack = document.querySelector(".btn-black");
const text = document.querySelector(".text");

buttonUnderline.onclick = () => {
    text.style.textDecoration = text.style.textDecoration === "underline" ? "none" : "underline";
};

buttonItalic.onclick = () => {
    text.style.fontStyle = text.style.fontStyle === "italic" ? "normal" : "italic";
};

buttonBold.onclick = () => {
    text.style.fontWeight = text.style.fontWeight === "bold" ? "normal" : "bold";
};

function getCurrentSize() {
    const currentSize = text.style.fontSize.split("px")[0];
    return parseInt(currentSize) || 16;
}

buttonDecrement.onclick = () => {
    if (getCurrentSize() > 12) {
        text.style.fontSize = `${getCurrentSize() - 2}px`;
    };

    spamSize.textContent = getCurrentSize();
};

buttonIncrement.onclick = () => {
    text.style.fontSize = `${getCurrentSize() + 2}px`;
    spamSize.textContent = getCurrentSize();
};

buttonRed.onclick = () => {
    text.style.color = "red";
};

buttonBlue.onclick = () => {
    text.style.color = "blue";
};

buttonPurple.onclick = () => {
    text.style.color = "purple";
};

buttonBlack.onclick = () => {
    text.style.color = "black";
};