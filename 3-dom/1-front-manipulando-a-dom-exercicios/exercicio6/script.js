const body = document.querySelector("body");
const img = body.querySelector("img");

let i = 0;
let left = 0;

setInterval(() => {
    if (left <= 1200) {    
    i++;
    left += 140;
    if ( i > 8) {
        i = 1;
    }
    img.src = `assets/${i}.png`;
    img.style.left = `${left}px`; 
    }
}, 250);

