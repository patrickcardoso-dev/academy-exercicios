const nomes = ["Ana", "Joana", "Carlos", "amanda"];

let começaComA = [];

for (let item of nomes) {
    if (item[0] === "A" || item[0] === "a") {
        começaComA.push(item);
    }
}

console.log(começaComA);