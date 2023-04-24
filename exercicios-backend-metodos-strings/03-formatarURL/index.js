const texto = "Aprenda programar do zero na Cubos Academy";

function urlAmigavel() { 
    let urlAmigavel = texto.toLowerCase();

    while (urlAmigavel != urlAmigavel.replace(" ", "-")) {
    urlAmigavel = urlAmigavel.replace(" ", "-");
    };

    return urlAmigavel;
};

console.log(urlAmigavel(texto));


